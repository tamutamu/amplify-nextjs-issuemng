/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSPC = /* GraphQL */ `
  subscription OnCreateSPC {
    onCreateSPC {
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
export const onUpdateSPC = /* GraphQL */ `
  subscription OnUpdateSPC {
    onUpdateSPC {
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
export const onDeleteSPC = /* GraphQL */ `
  subscription OnDeleteSPC {
    onDeleteSPC {
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
export const onCreateToken = /* GraphQL */ `
  subscription OnCreateToken {
    onCreateToken {
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
export const onUpdateToken = /* GraphQL */ `
  subscription OnUpdateToken {
    onUpdateToken {
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
export const onDeleteToken = /* GraphQL */ `
  subscription OnDeleteToken {
    onDeleteToken {
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
export const onCreateSto = /* GraphQL */ `
  subscription OnCreateSto {
    onCreateSto {
      id
      name
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSto = /* GraphQL */ `
  subscription OnUpdateSto {
    onUpdateSto {
      id
      name
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSto = /* GraphQL */ `
  subscription OnDeleteSto {
    onDeleteSto {
      id
      name
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($owner: String) {
    onCreateTodo(owner: $owner) {
      content
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($owner: String) {
    onUpdateTodo(owner: $owner) {
      content
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($owner: String) {
    onDeleteTodo(owner: $owner) {
      content
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateAuthority = /* GraphQL */ `
  subscription OnCreateAuthority($owner: String) {
    onCreateAuthority(owner: $owner) {
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
export const onUpdateAuthority = /* GraphQL */ `
  subscription OnUpdateAuthority($owner: String) {
    onUpdateAuthority(owner: $owner) {
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
export const onDeleteAuthority = /* GraphQL */ `
  subscription OnDeleteAuthority($owner: String) {
    onDeleteAuthority(owner: $owner) {
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
