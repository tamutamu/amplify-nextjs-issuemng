/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEventStore = /* GraphQL */ `
  subscription OnCreateEventStore {
    onCreateEventStore {
      id
      event
      body
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEventStore = /* GraphQL */ `
  subscription OnUpdateEventStore {
    onUpdateEventStore {
      id
      event
      body
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEventStore = /* GraphQL */ `
  subscription OnDeleteEventStore {
    onDeleteEventStore {
      id
      event
      body
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMCategory = /* GraphQL */ `
  subscription OnCreateMCategory {
    onCreateMCategory {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMCategory = /* GraphQL */ `
  subscription OnUpdateMCategory {
    onUpdateMCategory {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMCategory = /* GraphQL */ `
  subscription OnDeleteMCategory {
    onDeleteMCategory {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      comment
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      comment
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      comment
      createdAt
      updatedAt
    }
  }
`;
