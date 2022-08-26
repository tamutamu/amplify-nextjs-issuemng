/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const adminCreateUser = /* GraphQL */ `
  mutation AdminCreateUser($username: String) {
    adminCreateUser(username: $username)
  }
`;
export const adminDeleteUser = /* GraphQL */ `
  mutation AdminDeleteUser($username: String) {
    adminDeleteUser(username: $username)
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      content
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      content
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      content
      id
      createdAt
      updatedAt
    }
  }
`;
