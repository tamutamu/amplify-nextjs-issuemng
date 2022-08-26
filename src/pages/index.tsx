import {
  Authenticator,
  Button,
  Link,
  useAuthenticator,
  View,
} from "@aws-amplify/ui-react";
import {
  AuthState,
  UI_AUTH_CHANNEL,
  AUTH_STATE_CHANGE_EVENT,
  AuthStateHandler,
} from "@aws-amplify/ui-components";
import "@aws-amplify/ui-react/styles.css";
import { Amplify, API, Auth, Hub, I18n, withSSRContext } from "aws-amplify";
import Head from "next/head";
import awsExports from "../aws-exports";
import {
  adminCreateUser,
  adminDeleteUser,
  createTodo,
} from "../graphql/mutations";
import { listTodos } from "../graphql/queries";
import React, { useEffect, useState } from "react";
import {
  AdminCreateUserMutation,
  AdminDeleteUserMutation,
  CreateTodoInput,
  CreateTodoMutation,
  ListTodosQuery,
  Todo,
} from "../API";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import styles from "../styles/Home.module.css";
import { saveAs } from "file-saver";
import axios from "axios";
import { translations } from "@aws-amplify/ui-react";
// I18n.putVocabularies(translations);

Amplify.configure({ ...awsExports, ssr: true });
I18n.putVocabularies({
  ja: {
    "Sign in": "ログイン",
    "Username cannot be empty": "ユーザ名を入力してください",
    "User does not exist.": "ユーザがいないかパスワードが違います",
  },
});
I18n.setLanguage("ja");

//Amplify.configure({
//aws_appsync_authenticationType: "AWS_IAM",
//});
/**
		if (!process.browser) {
		Amplify.configure({
		　　　　"aws_appsync_authenticationType": "AWS_IAM",
		　　});
		}
	 **/

const MyLoginPage = () => {
  const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});
    const [mfa, setMfa] = useState("");
    Hub.listen(UI_AUTH_CHANNEL, ({ payload: { event, data, message } }) => {
      console.log(event);
      console.log(data);
      switch (event) {
        case "signIn":
        case "cognitoHostedUI":
          break;
        case "signOut":
          break;
        case "signIn_failure":
        case "cognitoHostedUI_failure":
          console.log("Sign in failure", data);
          break;
      }
    });

    const dispatchAuthStateChangeEvent: AuthStateHandler = (
      nextAuthState: AuthState,
      data?: object
    ) => {
      Hub.dispatch(UI_AUTH_CHANNEL, {
        event: AUTH_STATE_CHANGE_EVENT,
        message: nextAuthState,
        data,
      });
    };

    // const { route, toSignIn } = useAuthenticator((context) => [context.route]);
    const handleChange = (e) => {
      if (e.currentTarget.name == "username") {
        setUsername(e.currentTarget.value);
      } else if (e.currentTarget.name == "password") {
        setPassword(e.currentTarget.value);
      } else {
        setMfa(e.currentTarget.value);
      }
    };
    const handleLogin = async (e: React.MouseEvent<HTMLInputElement>) => {
      e.preventDefault();
      Auth.signIn(username, password).then((result) => {
        console.log(result);
        setUser(result);
        // dispatchAuthStateChangeEvent(AuthState.ConfirmSignIn);
      });
    };

    const handleMfa = async (e: React.MouseEvent<HTMLInputElement>) => {
      e.preventDefault();
      Auth.confirmSignIn(user, mfa, "SOFTWARE_TOKEN_MFA").then((result) => {
        console.log(result);
        // dispatchAuthStateChangeEvent(AuthState.ConfirmSignIn);
      });
    };

    return (
      <form>
        <div>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={username}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </div>
        <div>
          <input type="text" name="mfa" onChange={handleChange} value={mfa} />
        </div>
        <button onClick={handleLogin}>ログイン</button>
        <button onClick={handleMfa}>MFA</button>
      </form>
    );
  };

  return <LoginPage />;
};

const MyAuthenticator = () => {
  //   const formFields = {
  //     signUp: {
  //       username: {
  //         order: 1,
  //       },
  //       email: {
  //         order: 2,
  //       },
  //       password: {
  //         order: 3,
  //       },
  //       confirm_password: {
  //         order: 4,
  //       },
  //     },
  //   };

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

export default function Home({ todos = [] }: { todos: Todo[] }) {
  const router = useRouter();

  function download(fileUrl, params = {}) {
    axios.get(fileUrl, params).then((response) => {
      const blob = new Blob([response.data], {
        type: response.data.type,
      });

      //レスポンスヘッダからファイル名を取得します
      const contentDisposition = response.headers["content-disposition"];
      const fileName = getFileName(contentDisposition);

      //ダウンロードします
      saveAs(blob, fileName);
    });
  }

  function getFileName(contentDisposition) {
    /**
		let fileName = contentDisposition.substring(contentDisposition.indexOf("''") + 2,
																								contentDisposition.length
																							 );
																							 //デコードするとスペースが"+"になるのでスペースへ置換します
																							 fileName = decodeURI(fileName).replace(/\+/g, " ");
   **/

    return "tamura.jpg";
  }

  //  const [todos, setTodos] = useState<Todo[]>([]);

  /**
		useEffect(() => {
		(async () => {
		const result = await API.graphql({ query: listTodos });
		if ("data" in result && result.data) {
		const todos = result.data as ListTodosQuery;
		if (todos.listTodos) {
		setTodos(todos.listTodos.items as Todo[]);
		}
		}
		})();
		}, []);
	 **/

  async function handleUploadFile(event) {
    event.preventDefault();

    try {
      const user = await Auth.currentAuthenticatedUser();
      const idToken = user.signInUserSession.idToken.jwtToken;
      let element = document.getElementById(
        "image_file_path_update_id"
      ) as HTMLInputElement;

      var reader = new FileReader();

      reader.onload = (e) => {
        const ublob = new Blob([reader.result], {
          type: element.files[0].type,
        });
        const BlobName = element.files[0].name;

        var url = "https://d2go37lwe2ek5c.cloudfront.net/tamura.jpg";
        axios({
          method: "PUT",
          url: url,
          headers: {
            "Content-Type": "image/jpg",
            Authorization: idToken,
          },
          data: ublob,
        });
      };

      reader.readAsArrayBuffer(element.files[0]);
    } catch ({ errors }) {
      console.error(errors);
      //throw new Error(errors[0].message)
    }
  }

  async function handleDownloadFile(event) {
    event.preventDefault();

    try {
      const user = await Auth.currentAuthenticatedUser();
      const idToken = user.signInUserSession.idToken.jwtToken;
      const headers = {
        headers: { Authorization: idToken },
        responseType: "blob",
      };

      console.log(headers);
      //   download('https://d2go37lwe2ek5c.cloudfront.net/20200718_195458.jpg', headers);
      download("https://d2go37lwe2ek5c.cloudfront.net/tamura.jpg", headers);
    } catch ({ errors }) {
      console.error(...errors);
      throw new Error(errors[0].message);
    }
  }

  async function handleDeleteUser(event) {
    event.preventDefault();

    const request = (await API.graphql({
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      query: adminDeleteUser,
      variables: {
        username: "AAAAAA",
      },
    })) as { data: AdminDeleteUserMutation; errors: any[] };

    console.log(request);
  }

  async function handleCreateUser(event) {
    event.preventDefault();

    const request = (await API.graphql({
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      query: adminCreateUser,
      variables: {
        username: "AAAAAA",
      },
    })) as { data: AdminCreateUserMutation; errors: any[] };

    console.log(request);
  }

  async function handleCreateTodo(event) {
    event.preventDefault();

    const form = new FormData(event.target);

    try {
      const createInput: CreateTodoInput = {
        name: form.get("title").toString(),
        description: form.get("content").toString(),
      };

      const request = (await API.graphql({
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        query: createTodo,
        variables: {
          input: createInput,
        },
      })) as { data: CreateTodoMutation; errors: any[] };

      router.push(`/todo/${request.data.createTodo.id}`);
    } catch ({ errors }) {
      console.error(...errors);
      throw new Error(errors[0].message);
    }
  }

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
              <code className={styles.code}>{todos.length}</code>
              Todos
            </p>

            <div className={styles.grid}>
              {todos.map((todo) => (
                <a href={`/todo/${todo.id}`} key={todo.id}>
                  <h3>{todo.name}</h3>
                </a>
              ))}

              <div className={styles.card}>
                <h3 className={styles.title}>New Todo</h3>

                <form onSubmit={handleCreateTodo}>
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
                <button type="button" onClick={handleDownloadFile}>
                  Download File
                </button>
                <button type="button" onClick={handleCreateUser}>
                  ユーザ作成
                </button>
                <button type="button" onClick={handleDeleteUser}>
                  ユーザ削除
                </button>
                <div>
                  <input type="file" id="image_file_path_update_id"></input>
                </div>
                <button type="button" onClick={handleUploadFile}>
                  Uploard File
                </button>
              </div>
            </div>
          </main>
        </div>
      </AuthComponent>
    </Authenticator.Provider>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  //   const SSR = withSSRContext({ req });

  // 	const variables = {variables: {filter: {or: [{ name: { beginsWith: "Today"}}], name: {contains: "5"}}}}

  // 	const response = (await SSR.API.graphql({ query: listTodos, ...variables })) as {
  //     data: ListTodosQuery;
  //   };

  return {
    props: {
      //   todos: response.data.listTodos.items,
      todos: [],
    },
  };
};
