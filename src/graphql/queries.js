/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEventStore = /* GraphQL */ `
  query GetEventStore($id: ID!) {
    getEventStore(id: $id) {
      id
      event
      body
      status
      createdAt
      updatedAt
    }
  }
`;
export const listEventStores = /* GraphQL */ `
  query ListEventStores(
    $filter: ModelEventStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        event
        body
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMCategory = /* GraphQL */ `
  query GetMCategory($id: ID!) {
    getMCategory(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listMCategories = /* GraphQL */ `
  query ListMCategories(
    $filter: ModelMCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      categrory
      comments {
        id
        comment
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        categrory
        comments {
          id
          comment
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      comment
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        comment
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
