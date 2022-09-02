/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSPC = /* GraphQL */ `
  query GetSPC($id: ID!) {
    getSPC(id: $id) {
      id
      name
      schema
      tenantId
      token {
        id
        name
        tenantId
        spc {
          id
          name
          schema
          tenantId
          createdAt
          updatedAt
          sPCTokenId
        }
        createdAt
        updatedAt
        tokenSpcId
      }
      createdAt
      updatedAt
      sPCTokenId
    }
  }
`;
export const listSPCS = /* GraphQL */ `
  query ListSPCS(
    $filter: ModelSPCFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSPCS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        schema
        tenantId
        token {
          id
          name
          tenantId
          createdAt
          updatedAt
          tokenSpcId
        }
        createdAt
        updatedAt
        sPCTokenId
      }
      nextToken
    }
  }
`;
export const getToken = /* GraphQL */ `
  query GetToken($id: ID!) {
    getToken(id: $id) {
      id
      name
      tenantId
      spc {
        id
        name
        schema
        tenantId
        token {
          id
          name
          tenantId
          createdAt
          updatedAt
          tokenSpcId
        }
        createdAt
        updatedAt
        sPCTokenId
      }
      createdAt
      updatedAt
      tokenSpcId
    }
  }
`;
export const listTokens = /* GraphQL */ `
  query ListTokens(
    $filter: ModelTokenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTokens(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        tenantId
        spc {
          id
          name
          schema
          tenantId
          createdAt
          updatedAt
          sPCTokenId
        }
        createdAt
        updatedAt
        tokenSpcId
      }
      nextToken
    }
  }
`;
export const getSto = /* GraphQL */ `
  query GetSto($id: ID!) {
    getSto(id: $id) {
      id
      name
      status
      createdAt
      updatedAt
    }
  }
`;
export const listStos = /* GraphQL */ `
  query ListStos(
    $filter: ModelStoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        status
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
      content
      id
      createdAt
      updatedAt
      owner
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
        content
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getAuthority = /* GraphQL */ `
  query GetAuthority($group: String!, $path: String!, $scheme: String!) {
    getAuthority(group: $group, path: $path, scheme: $scheme) {
      group
      scheme
      path
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listAuthorities = /* GraphQL */ `
  query ListAuthorities(
    $group: String
    $pathScheme: ModelAuthorityPrimaryCompositeKeyConditionInput
    $filter: ModelAuthorityFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAuthorities(
      group: $group
      pathScheme: $pathScheme
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        group
        scheme
        path
        name
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const listAuthoritiesByPath = /* GraphQL */ `
  query ListAuthoritiesByPath(
    $group: String!
    $path: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAuthorityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuthoritiesByPath(
      group: $group
      path: $path
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        group
        scheme
        path
        name
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const listTodoApi = /* GraphQL */ `
  query ListTodoApi($name: String) {
    listTodoApi(name: $name) {
      content
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
