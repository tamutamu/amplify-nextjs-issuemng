/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEventStore = /* GraphQL */ `
  mutation CreateEventStore(
    $input: CreateEventStoreInput!
    $condition: ModelEventStoreConditionInput
  ) {
    createEventStore(input: $input, condition: $condition) {
      id
      event
      body
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateEventStore = /* GraphQL */ `
  mutation UpdateEventStore(
    $input: UpdateEventStoreInput!
    $condition: ModelEventStoreConditionInput
  ) {
    updateEventStore(input: $input, condition: $condition) {
      id
      event
      body
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteEventStore = /* GraphQL */ `
  mutation DeleteEventStore(
    $input: DeleteEventStoreInput!
    $condition: ModelEventStoreConditionInput
  ) {
    deleteEventStore(input: $input, condition: $condition) {
      id
      event
      body
      status
      createdAt
      updatedAt
    }
  }
`;
export const createMCategory = /* GraphQL */ `
  mutation CreateMCategory(
    $input: CreateMCategoryInput!
    $condition: ModelMCategoryConditionInput
  ) {
    createMCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateMCategory = /* GraphQL */ `
  mutation UpdateMCategory(
    $input: UpdateMCategoryInput!
    $condition: ModelMCategoryConditionInput
  ) {
    updateMCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteMCategory = /* GraphQL */ `
  mutation DeleteMCategory(
    $input: DeleteMCategoryInput!
    $condition: ModelMCategoryConditionInput
  ) {
    deleteMCategory(input: $input, condition: $condition) {
      id
      name
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      comment
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      comment
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      comment
      createdAt
      updatedAt
    }
  }
`;
