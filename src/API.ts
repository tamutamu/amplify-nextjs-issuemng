/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type createStoAPIInput = {
  name: string,
  status?: string | null,
};

export type Sto = {
  __typename: "Sto",
  id?: string | null,
  name: string,
  status?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type CreateSPCInput = {
  id?: string | null,
  name: string,
  schema: string,
  tenantId: string,
  sPCTokenId?: string | null,
};

export type ModelSPCConditionInput = {
  name?: ModelStringInput | null,
  schema?: ModelStringInput | null,
  tenantId?: ModelStringInput | null,
  and?: Array< ModelSPCConditionInput | null > | null,
  or?: Array< ModelSPCConditionInput | null > | null,
  not?: ModelSPCConditionInput | null,
  sPCTokenId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type SPC = {
  __typename: "SPC",
  id?: string | null,
  name: string,
  schema: string,
  tenantId: string,
  token?: Token | null,
  createdAt: string,
  updatedAt: string,
  sPCTokenId?: string | null,
};

export type Token = {
  __typename: "Token",
  id?: string | null,
  name: string,
  tenantId: string,
  spc?: SPC | null,
  createdAt: string,
  updatedAt: string,
  tokenSpcId?: string | null,
};

export type UpdateSPCInput = {
  id: string,
  name?: string | null,
  schema?: string | null,
  tenantId?: string | null,
  sPCTokenId?: string | null,
};

export type DeleteSPCInput = {
  id: string,
};

export type CreateTokenInput = {
  id?: string | null,
  name: string,
  tenantId: string,
  tokenSpcId?: string | null,
};

export type ModelTokenConditionInput = {
  name?: ModelStringInput | null,
  tenantId?: ModelStringInput | null,
  and?: Array< ModelTokenConditionInput | null > | null,
  or?: Array< ModelTokenConditionInput | null > | null,
  not?: ModelTokenConditionInput | null,
  tokenSpcId?: ModelIDInput | null,
};

export type UpdateTokenInput = {
  id: string,
  name?: string | null,
  tenantId?: string | null,
  tokenSpcId?: string | null,
};

export type DeleteTokenInput = {
  id: string,
};

export type CreateStoInput = {
  id?: string | null,
  name: string,
  status?: string | null,
};

export type ModelStoConditionInput = {
  name?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelStoConditionInput | null > | null,
  or?: Array< ModelStoConditionInput | null > | null,
  not?: ModelStoConditionInput | null,
};

export type UpdateStoInput = {
  id: string,
  name?: string | null,
  status?: string | null,
};

export type DeleteStoInput = {
  id: string,
};

export type CreateTodoInput = {
  content?: string | null,
  id?: string | null,
};

export type ModelTodoConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type Todo = {
  __typename: "Todo",
  content?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateTodoInput = {
  content?: string | null,
  id: string,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateAuthorityInput = {
  group: string,
  scheme: string,
  path: string,
  name: string,
};

export type ModelAuthorityConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelAuthorityConditionInput | null > | null,
  or?: Array< ModelAuthorityConditionInput | null > | null,
  not?: ModelAuthorityConditionInput | null,
};

export type Authority = {
  __typename: "Authority",
  group: string,
  scheme: string,
  path: string,
  name: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateAuthorityInput = {
  group: string,
  scheme: string,
  path: string,
  name?: string | null,
};

export type DeleteAuthorityInput = {
  group: string,
  path: string,
  scheme: string,
};

export type ModelSPCFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  schema?: ModelStringInput | null,
  tenantId?: ModelStringInput | null,
  and?: Array< ModelSPCFilterInput | null > | null,
  or?: Array< ModelSPCFilterInput | null > | null,
  not?: ModelSPCFilterInput | null,
  sPCTokenId?: ModelIDInput | null,
};

export type ModelSPCConnection = {
  __typename: "ModelSPCConnection",
  items:  Array<SPC | null >,
  nextToken?: string | null,
};

export type ModelTokenFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  tenantId?: ModelStringInput | null,
  and?: Array< ModelTokenFilterInput | null > | null,
  or?: Array< ModelTokenFilterInput | null > | null,
  not?: ModelTokenFilterInput | null,
  tokenSpcId?: ModelIDInput | null,
};

export type ModelTokenConnection = {
  __typename: "ModelTokenConnection",
  items:  Array<Token | null >,
  nextToken?: string | null,
};

export type ModelStoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelStoFilterInput | null > | null,
  or?: Array< ModelStoFilterInput | null > | null,
  not?: ModelStoFilterInput | null,
};

export type ModelStoConnection = {
  __typename: "ModelStoConnection",
  items:  Array<Sto | null >,
  nextToken?: string | null,
};

export type ModelTodoFilterInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelAuthorityPrimaryCompositeKeyConditionInput = {
  eq?: ModelAuthorityPrimaryCompositeKeyInput | null,
  le?: ModelAuthorityPrimaryCompositeKeyInput | null,
  lt?: ModelAuthorityPrimaryCompositeKeyInput | null,
  ge?: ModelAuthorityPrimaryCompositeKeyInput | null,
  gt?: ModelAuthorityPrimaryCompositeKeyInput | null,
  between?: Array< ModelAuthorityPrimaryCompositeKeyInput | null > | null,
  beginsWith?: ModelAuthorityPrimaryCompositeKeyInput | null,
};

export type ModelAuthorityPrimaryCompositeKeyInput = {
  path?: string | null,
  scheme?: string | null,
};

export type ModelAuthorityFilterInput = {
  group?: ModelStringInput | null,
  scheme?: ModelStringInput | null,
  path?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelAuthorityFilterInput | null > | null,
  or?: Array< ModelAuthorityFilterInput | null > | null,
  not?: ModelAuthorityFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelAuthorityConnection = {
  __typename: "ModelAuthorityConnection",
  items:  Array<Authority | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type AdminCreateUserMutationVariables = {
  username?: string | null,
};

export type AdminCreateUserMutation = {
  adminCreateUser?: string | null,
};

export type AdminDeleteUserMutationVariables = {
  username?: string | null,
};

export type AdminDeleteUserMutation = {
  adminDeleteUser?: string | null,
};

export type CreateStoAPIMutationVariables = {
  input?: createStoAPIInput | null,
};

export type CreateStoAPIMutation = {
  createStoAPI?:  {
    __typename: "Sto",
    id?: string | null,
    name: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSPCMutationVariables = {
  input: CreateSPCInput,
  condition?: ModelSPCConditionInput | null,
};

export type CreateSPCMutation = {
  createSPC?:  {
    __typename: "SPC",
    id?: string | null,
    name: string,
    schema: string,
    tenantId: string,
    token?:  {
      __typename: "Token",
      id?: string | null,
      name: string,
      tenantId: string,
      spc?:  {
        __typename: "SPC",
        id?: string | null,
        name: string,
        schema: string,
        tenantId: string,
        createdAt: string,
        updatedAt: string,
        sPCTokenId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tokenSpcId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sPCTokenId?: string | null,
  } | null,
};

export type UpdateSPCMutationVariables = {
  input: UpdateSPCInput,
  condition?: ModelSPCConditionInput | null,
};

export type UpdateSPCMutation = {
  updateSPC?:  {
    __typename: "SPC",
    id?: string | null,
    name: string,
    schema: string,
    tenantId: string,
    token?:  {
      __typename: "Token",
      id?: string | null,
      name: string,
      tenantId: string,
      spc?:  {
        __typename: "SPC",
        id?: string | null,
        name: string,
        schema: string,
        tenantId: string,
        createdAt: string,
        updatedAt: string,
        sPCTokenId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tokenSpcId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sPCTokenId?: string | null,
  } | null,
};

export type DeleteSPCMutationVariables = {
  input: DeleteSPCInput,
  condition?: ModelSPCConditionInput | null,
};

export type DeleteSPCMutation = {
  deleteSPC?:  {
    __typename: "SPC",
    id?: string | null,
    name: string,
    schema: string,
    tenantId: string,
    token?:  {
      __typename: "Token",
      id?: string | null,
      name: string,
      tenantId: string,
      spc?:  {
        __typename: "SPC",
        id?: string | null,
        name: string,
        schema: string,
        tenantId: string,
        createdAt: string,
        updatedAt: string,
        sPCTokenId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tokenSpcId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sPCTokenId?: string | null,
  } | null,
};

export type CreateTokenMutationVariables = {
  input: CreateTokenInput,
  condition?: ModelTokenConditionInput | null,
};

export type CreateTokenMutation = {
  createToken?:  {
    __typename: "Token",
    id?: string | null,
    name: string,
    tenantId: string,
    spc?:  {
      __typename: "SPC",
      id?: string | null,
      name: string,
      schema: string,
      tenantId: string,
      token?:  {
        __typename: "Token",
        id?: string | null,
        name: string,
        tenantId: string,
        createdAt: string,
        updatedAt: string,
        tokenSpcId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      sPCTokenId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tokenSpcId?: string | null,
  } | null,
};

export type UpdateTokenMutationVariables = {
  input: UpdateTokenInput,
  condition?: ModelTokenConditionInput | null,
};

export type UpdateTokenMutation = {
  updateToken?:  {
    __typename: "Token",
    id?: string | null,
    name: string,
    tenantId: string,
    spc?:  {
      __typename: "SPC",
      id?: string | null,
      name: string,
      schema: string,
      tenantId: string,
      token?:  {
        __typename: "Token",
        id?: string | null,
        name: string,
        tenantId: string,
        createdAt: string,
        updatedAt: string,
        tokenSpcId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      sPCTokenId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tokenSpcId?: string | null,
  } | null,
};

export type DeleteTokenMutationVariables = {
  input: DeleteTokenInput,
  condition?: ModelTokenConditionInput | null,
};

export type DeleteTokenMutation = {
  deleteToken?:  {
    __typename: "Token",
    id?: string | null,
    name: string,
    tenantId: string,
    spc?:  {
      __typename: "SPC",
      id?: string | null,
      name: string,
      schema: string,
      tenantId: string,
      token?:  {
        __typename: "Token",
        id?: string | null,
        name: string,
        tenantId: string,
        createdAt: string,
        updatedAt: string,
        tokenSpcId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      sPCTokenId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tokenSpcId?: string | null,
  } | null,
};

export type CreateStoMutationVariables = {
  input: CreateStoInput,
  condition?: ModelStoConditionInput | null,
};

export type CreateStoMutation = {
  createSto?:  {
    __typename: "Sto",
    id?: string | null,
    name: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStoMutationVariables = {
  input: UpdateStoInput,
  condition?: ModelStoConditionInput | null,
};

export type UpdateStoMutation = {
  updateSto?:  {
    __typename: "Sto",
    id?: string | null,
    name: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStoMutationVariables = {
  input: DeleteStoInput,
  condition?: ModelStoConditionInput | null,
};

export type DeleteStoMutation = {
  deleteSto?:  {
    __typename: "Sto",
    id?: string | null,
    name: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    content?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    content?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateAuthorityMutationVariables = {
  input: CreateAuthorityInput,
  condition?: ModelAuthorityConditionInput | null,
};

export type CreateAuthorityMutation = {
  createAuthority?:  {
    __typename: "Authority",
    group: string,
    scheme: string,
    path: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateAuthorityMutationVariables = {
  input: UpdateAuthorityInput,
  condition?: ModelAuthorityConditionInput | null,
};

export type UpdateAuthorityMutation = {
  updateAuthority?:  {
    __typename: "Authority",
    group: string,
    scheme: string,
    path: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteAuthorityMutationVariables = {
  input: DeleteAuthorityInput,
  condition?: ModelAuthorityConditionInput | null,
};

export type DeleteAuthorityMutation = {
  deleteAuthority?:  {
    __typename: "Authority",
    group: string,
    scheme: string,
    path: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetSPCQueryVariables = {
  id: string,
};

export type GetSPCQuery = {
  getSPC?:  {
    __typename: "SPC",
    id?: string | null,
    name: string,
    schema: string,
    tenantId: string,
    token?:  {
      __typename: "Token",
      id?: string | null,
      name: string,
      tenantId: string,
      spc?:  {
        __typename: "SPC",
        id?: string | null,
        name: string,
        schema: string,
        tenantId: string,
        createdAt: string,
        updatedAt: string,
        sPCTokenId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tokenSpcId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sPCTokenId?: string | null,
  } | null,
};

export type ListSPCSQueryVariables = {
  filter?: ModelSPCFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSPCSQuery = {
  listSPCS?:  {
    __typename: "ModelSPCConnection",
    items:  Array< {
      __typename: "SPC",
      id?: string | null,
      name: string,
      schema: string,
      tenantId: string,
      token?:  {
        __typename: "Token",
        id?: string | null,
        name: string,
        tenantId: string,
        createdAt: string,
        updatedAt: string,
        tokenSpcId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      sPCTokenId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTokenQueryVariables = {
  id: string,
};

export type GetTokenQuery = {
  getToken?:  {
    __typename: "Token",
    id?: string | null,
    name: string,
    tenantId: string,
    spc?:  {
      __typename: "SPC",
      id?: string | null,
      name: string,
      schema: string,
      tenantId: string,
      token?:  {
        __typename: "Token",
        id?: string | null,
        name: string,
        tenantId: string,
        createdAt: string,
        updatedAt: string,
        tokenSpcId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      sPCTokenId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tokenSpcId?: string | null,
  } | null,
};

export type ListTokensQueryVariables = {
  filter?: ModelTokenFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTokensQuery = {
  listTokens?:  {
    __typename: "ModelTokenConnection",
    items:  Array< {
      __typename: "Token",
      id?: string | null,
      name: string,
      tenantId: string,
      spc?:  {
        __typename: "SPC",
        id?: string | null,
        name: string,
        schema: string,
        tenantId: string,
        createdAt: string,
        updatedAt: string,
        sPCTokenId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tokenSpcId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStoQueryVariables = {
  id: string,
};

export type GetStoQuery = {
  getSto?:  {
    __typename: "Sto",
    id?: string | null,
    name: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStosQueryVariables = {
  filter?: ModelStoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStosQuery = {
  listStos?:  {
    __typename: "ModelStoConnection",
    items:  Array< {
      __typename: "Sto",
      id?: string | null,
      name: string,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    content?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      content?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAuthorityQueryVariables = {
  group: string,
  path: string,
  scheme: string,
};

export type GetAuthorityQuery = {
  getAuthority?:  {
    __typename: "Authority",
    group: string,
    scheme: string,
    path: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListAuthoritiesQueryVariables = {
  group?: string | null,
  pathScheme?: ModelAuthorityPrimaryCompositeKeyConditionInput | null,
  filter?: ModelAuthorityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAuthoritiesQuery = {
  listAuthorities?:  {
    __typename: "ModelAuthorityConnection",
    items:  Array< {
      __typename: "Authority",
      group: string,
      scheme: string,
      path: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListAuthoritiesByPathQueryVariables = {
  group: string,
  path?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAuthorityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAuthoritiesByPathQuery = {
  listAuthoritiesByPath?:  {
    __typename: "ModelAuthorityConnection",
    items:  Array< {
      __typename: "Authority",
      group: string,
      scheme: string,
      path: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTodoApiQueryVariables = {
  name?: string | null,
};

export type ListTodoApiQuery = {
  listTodoApi?:  Array< {
    __typename: "Todo",
    content?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null > | null,
};

export type OnCreateSPCSubscription = {
  onCreateSPC?:  {
    __typename: "SPC",
    id?: string | null,
    name: string,
    schema: string,
    tenantId: string,
    token?:  {
      __typename: "Token",
      id?: string | null,
      name: string,
      tenantId: string,
      spc?:  {
        __typename: "SPC",
        id?: string | null,
        name: string,
        schema: string,
        tenantId: string,
        createdAt: string,
        updatedAt: string,
        sPCTokenId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tokenSpcId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sPCTokenId?: string | null,
  } | null,
};

export type OnUpdateSPCSubscription = {
  onUpdateSPC?:  {
    __typename: "SPC",
    id?: string | null,
    name: string,
    schema: string,
    tenantId: string,
    token?:  {
      __typename: "Token",
      id?: string | null,
      name: string,
      tenantId: string,
      spc?:  {
        __typename: "SPC",
        id?: string | null,
        name: string,
        schema: string,
        tenantId: string,
        createdAt: string,
        updatedAt: string,
        sPCTokenId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tokenSpcId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sPCTokenId?: string | null,
  } | null,
};

export type OnDeleteSPCSubscription = {
  onDeleteSPC?:  {
    __typename: "SPC",
    id?: string | null,
    name: string,
    schema: string,
    tenantId: string,
    token?:  {
      __typename: "Token",
      id?: string | null,
      name: string,
      tenantId: string,
      spc?:  {
        __typename: "SPC",
        id?: string | null,
        name: string,
        schema: string,
        tenantId: string,
        createdAt: string,
        updatedAt: string,
        sPCTokenId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tokenSpcId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sPCTokenId?: string | null,
  } | null,
};

export type OnCreateTokenSubscription = {
  onCreateToken?:  {
    __typename: "Token",
    id?: string | null,
    name: string,
    tenantId: string,
    spc?:  {
      __typename: "SPC",
      id?: string | null,
      name: string,
      schema: string,
      tenantId: string,
      token?:  {
        __typename: "Token",
        id?: string | null,
        name: string,
        tenantId: string,
        createdAt: string,
        updatedAt: string,
        tokenSpcId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      sPCTokenId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tokenSpcId?: string | null,
  } | null,
};

export type OnUpdateTokenSubscription = {
  onUpdateToken?:  {
    __typename: "Token",
    id?: string | null,
    name: string,
    tenantId: string,
    spc?:  {
      __typename: "SPC",
      id?: string | null,
      name: string,
      schema: string,
      tenantId: string,
      token?:  {
        __typename: "Token",
        id?: string | null,
        name: string,
        tenantId: string,
        createdAt: string,
        updatedAt: string,
        tokenSpcId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      sPCTokenId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tokenSpcId?: string | null,
  } | null,
};

export type OnDeleteTokenSubscription = {
  onDeleteToken?:  {
    __typename: "Token",
    id?: string | null,
    name: string,
    tenantId: string,
    spc?:  {
      __typename: "SPC",
      id?: string | null,
      name: string,
      schema: string,
      tenantId: string,
      token?:  {
        __typename: "Token",
        id?: string | null,
        name: string,
        tenantId: string,
        createdAt: string,
        updatedAt: string,
        tokenSpcId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      sPCTokenId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tokenSpcId?: string | null,
  } | null,
};

export type OnCreateStoSubscription = {
  onCreateSto?:  {
    __typename: "Sto",
    id?: string | null,
    name: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStoSubscription = {
  onUpdateSto?:  {
    __typename: "Sto",
    id?: string | null,
    name: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStoSubscription = {
  onDeleteSto?:  {
    __typename: "Sto",
    id?: string | null,
    name: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    content?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateAuthoritySubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateAuthoritySubscription = {
  onCreateAuthority?:  {
    __typename: "Authority",
    group: string,
    scheme: string,
    path: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateAuthoritySubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateAuthoritySubscription = {
  onUpdateAuthority?:  {
    __typename: "Authority",
    group: string,
    scheme: string,
    path: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteAuthoritySubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteAuthoritySubscription = {
  onDeleteAuthority?:  {
    __typename: "Authority",
    group: string,
    scheme: string,
    path: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
