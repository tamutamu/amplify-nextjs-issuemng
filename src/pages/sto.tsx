import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { Authenticator } from "@aws-amplify/ui-react";
import merge from "deepmerge";
import "@aws-amplify/ui-react/styles.css";
import { Amplify, API, Auth } from "aws-amplify";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  AdminDeleteUserMutation,
  CreateAuthorityMutation,
  CreateSPCInput,
  CreateSPCMutation,
  CreateTodoMutation,
  ListSPCSQuery,
  ListTodoApiQuery,
  SPC,
  Todo,
} from "../API";
import awsExports from "../aws-exports";
import {
  createAuthority,
  createSPC,
  createStoAPI,
  createTodo,
} from "../graphql/mutations";
import { listSPCS, listTodoApi } from "../graphql/queries";
import styles from "../styles/Home.module.css";

Amplify.configure({ ...awsExports, ssr: true });

export default function StoTest({ _todos = [] }: { _todos: Todo[] }) {
  const router = useRouter();

  const [spcs, setSPCs] = useState<SPC[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);

  const secureAPI = async (query, variables = {}) => {
    console.log(variables);
    const variablesWithAuth = merge(variables, {
      filter: { spcId: { eq: [1, 2, 3, 4] } },
    });
    console.log(variablesWithAuth);
    const queryName = Object.keys(query)[0];
    return await API.graphql({
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      query: query[queryName],
    });
  };

  useEffect(() => {
    (async () => {
      const result = await secureAPI(
        { listTodoApi },
        { filter: { id: { eq: "test" } } }
      );
      if ("data" in result && result.data) {
        const todos = result.data as ListTodoApiQuery;
        if (todos.listTodoApi) {
          setTodos(todos.listTodoApi as Todo[]);
        }
      }
    })();
  }, []);

  async function handleCreateAuthority(event) {
    event.preventDefault();

    const request = (await API.graphql({
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      query: createAuthority,
      variables: {
        input: {
          group: "fibo",
          scheme: "GK-TK",
          path: "/api/sto/issue",
          name: "ST発行",
        },
      },
    })) as { data: CreateAuthorityMutation; errors: any[] };

    console.log(request);
  }

  async function handleChainFunction(event) {
    event.preventDefault();

    const request = (await API.graphql({
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      query: createStoAPI,
      variables: {
        input: {
          name: "test1",
          status: "IN_PROGRESS",
        },
      },
    })) as { data: AdminDeleteUserMutation; errors: any[] };

    console.log(request);
  }

  async function handleCreateSPC(event) {
    event.preventDefault();

    // const form = new FormData(event.target);

    try {
      //   const createInput: CreateSPCInput = {
      //     name: form.get("title").toString(),
      //     schema: "TMK",
      //   };

      const request = (await API.graphql({
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
        query: createTodo,
        variables: {
          input: { content: "test" },
        },
      })) as { data: CreateTodoMutation; errors: any[] };

      //   router.push(`/todo/${request.data.createSPC.id}`);
    } catch ({ errors }) {
      console.error(...errors);
      throw new Error(errors[0].message);
    }
  }

  return (
    <Authenticator.Provider>
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
              <div key={todo.id}>
                <h3>{todo.content}</h3>
              </div>
            ))}
          </div>

          <div className={styles.card}>
            <h3 className={styles.title}>New Todo</h3>

            <form onSubmit={handleCreateSPC}>
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
              <button type="button" onClick={handleCreateSPC}>
                Create SPC
              </button>
              <button type="button" onClick={() => Auth.signOut()}>
                Sign out
              </button>
            </form>
            <button type="button" onClick={handleCreateAuthority}>
              機能権限追加
            </button>
            <button type="button" onClick={handleChainFunction}>
              連鎖Function
            </button>
            <div></div>
          </div>
        </main>
      </div>
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
      _todos: [],
    },
  };
};
