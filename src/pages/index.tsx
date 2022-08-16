import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { Amplify, API, Auth, withSSRContext } from "aws-amplify";
import Head from "next/head";
import awsExports from "../aws-exports";
import { createTodo } from "../graphql/mutations";
import { listTodos } from "../graphql/queries";
import React, { useEffect, useState } from "react";
import {
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

Amplify.configure({ ...awsExports, ssr: true });
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
              <p>{todo.description}</p>
            </a>
          ))}

          <div className={styles.card}>
            <h3 className={styles.title}>New Todo</h3>

            <AmplifyAuthenticator>
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
              <div>
                <input type="file" id="image_file_path_update_id"></input>
              </div>
              <button type="button" onClick={handleUploadFile}>
                Uploard File
              </button>
            </AmplifyAuthenticator>
          </div>
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const SSR = withSSRContext({ req });

  const response = (await SSR.API.graphql({ query: listTodos })) as {
    data: ListTodosQuery;
  };

  return {
    props: {
      todos: response.data.listTodos.items,
    },
  };
};
