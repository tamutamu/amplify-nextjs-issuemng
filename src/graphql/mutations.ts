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
export const createStoAPI = /* GraphQL */ `
  mutation CreateStoAPI($input: createStoAPIInput) {
    createStoAPI(input: $input) {
      id
      name
      status
      createdAt
      updatedAt
    }
  }
`;
export const createSPC = /* GraphQL */ `
  mutation CreateSPC(
    $input: CreateSPCInput!
    $condition: ModelSPCConditionInput
  ) {
    createSPC(input: $input, condition: $condition) {
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
export const updateSPC = /* GraphQL */ `
  mutation UpdateSPC(
    $input: UpdateSPCInput!
    $condition: ModelSPCConditionInput
  ) {
    updateSPC(input: $input, condition: $condition) {
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
export const deleteSPC = /* GraphQL */ `
  mutation DeleteSPC(
    $input: DeleteSPCInput!
    $condition: ModelSPCConditionInput
  ) {
    deleteSPC(input: $input, condition: $condition) {
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
export const createToken = /* GraphQL */ `
  mutation CreateToken(
    $input: CreateTokenInput!
    $condition: ModelTokenConditionInput
  ) {
    createToken(input: $input, condition: $condition) {
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
export const updateToken = /* GraphQL */ `
  mutation UpdateToken(
    $input: UpdateTokenInput!
    $condition: ModelTokenConditionInput
  ) {
    updateToken(input: $input, condition: $condition) {
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
export const deleteToken = /* GraphQL */ `
  mutation DeleteToken(
    $input: DeleteTokenInput!
    $condition: ModelTokenConditionInput
  ) {
    deleteToken(input: $input, condition: $condition) {
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
export const createSto = /* GraphQL */ `
  mutation CreateSto(
    $input: CreateStoInput!
    $condition: ModelStoConditionInput
  ) {
    createSto(input: $input, condition: $condition) {
      id
      name
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateSto = /* GraphQL */ `
  mutation UpdateSto(
    $input: UpdateStoInput!
    $condition: ModelStoConditionInput
  ) {
    updateSto(input: $input, condition: $condition) {
      id
      name
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteSto = /* GraphQL */ `
  mutation DeleteSto(
    $input: DeleteStoInput!
    $condition: ModelStoConditionInput
  ) {
    deleteSto(input: $input, condition: $condition) {
      id
      name
      status
      createdAt
      updatedAt
    }
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
      owner
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
      owner
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
      owner
    }
  }
`;
export const createAuthority = /* GraphQL */ `
  mutation CreateAuthority(
    $input: CreateAuthorityInput!
    $condition: ModelAuthorityConditionInput
  ) {
    createAuthority(input: $input, condition: $condition) {
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
export const updateAuthority = /* GraphQL */ `
  mutation UpdateAuthority(
    $input: UpdateAuthorityInput!
    $condition: ModelAuthorityConditionInput
  ) {
    updateAuthority(input: $input, condition: $condition) {
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
export const deleteAuthority = /* GraphQL */ `
  mutation DeleteAuthority(
    $input: DeleteAuthorityInput!
    $condition: ModelAuthorityConditionInput
  ) {
    deleteAuthority(input: $input, condition: $condition) {
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
