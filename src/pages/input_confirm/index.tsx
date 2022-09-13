import {
  Authenticator,
  Link,
  useAuthenticator,
  View,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify, Auth, I18n } from "aws-amplify";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { Todo } from "../API";
import awsExports from "../aws-exports";
import styles from "../styles/Home.module.css";

Amplify.configure({ ...awsExports, ssr: true });
I18n.putVocabularies({
  ja: {
    "Sign in": "ログイン",
    "Username cannot be empty": "ユーザ名を入力してください",
    "User does not exist.": "ユーザがいないかパスワードが違います",
  },
});
I18n.setLanguage("ja");

const MyAuthenticator = () => {
  const formFields = {
    signIn: {
      username: {
        placeholder: "ユーザIDを入力してください",
      },
      password: {
        placeholder: "パスワードを入力してください",
      },
    },
  };

  const components = {
    SignIn: {
      Footer() {
        const { toResetPassword, toSignIn } = useAuthenticator();
        return (
          <>
            <View textAlign="center">
              <Link fontWeight="normal" onClick={toResetPassword}>
                パスワードを忘れた方はこちら
              </Link>
            </View>
          </>
        );
      },
    },
  };

  return (
    <Authenticator
      formFields={formFields}
      components={components}
      hideSignUp={true}
    ></Authenticator>
  );
};

const AuthComponent = ({ children }: { children: React.ReactNode }) => {
  const { route, toSignIn } = useAuthenticator((context) => [context.route]);

  return <>{route !== "authenticated" ? <MyAuthenticator /> : children}</>;
};

export default function Home() {
  const router = useRouter();

  return (
    <Authenticator.Provider>
      <AuthComponent>
        <div className={styles.container}>
          <Head>
            <title>Amplify + Next.js</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
            <h1 className={styles.title}>Amplify + Next.js</h1>

            <p className={styles.description}>
              <code className={styles.code}></code>
              Todos
            </p>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.title}>New Todo</h3>

                <form>
                  <fieldset>
                    <legend>Title</legend>
                    <input
                      defaultValue={`Today, ${new Date().toLocaleTimeString()}`}
                      name="title"
                    />
                  </fieldset>

                  <fieldset>
                    <legend>Content</legend>
                    <textarea
                      defaultValue="I built an Amplify app with Next.js!"
                      name="content"
                    />
                  </fieldset>

                  <button>Create Todo</button>
                  <button type="button" onClick={() => Auth.signOut()}>
                    Sign out
                  </button>
                </form>
                <div>
                  <input type="file" id="image_file_path_update_id"></input>
                </div>
              </div>
            </div>
          </main>
        </div>
      </AuthComponent>
    </Authenticator.Provider>
  );
}

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//   //   const SSR = withSSRContext({ req });

//   // 	const variables = {variables: {filter: {or: [{ name: { beginsWith: "Today"}}], name: {contains: "5"}}}}

//   // 	const response = (await SSR.API.graphql({ query: listTodos, ...variables })) as {
//   //     data: ListTodosQuery;
//   //   };

//   return {
//     props: {
//       //   todos: response.data.listTodos.items,
//       todos: [],
//     },
//   };
// };
