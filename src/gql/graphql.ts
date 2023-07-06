/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: { input: any; output: any; }
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: any; output: any; }
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: { input: any; output: any; }
  /**
   * Leverages the internal Python implementation of UUID (uuid.UUID) to provide native UUID objects
   * in fields, resolvers and input.
   */
  UUID: { input: any; output: any; }
};

export type ApiErrorType = {
  __typename?: 'APIErrorType';
  code?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CreateList = {
  __typename?: 'CreateList';
  list?: Maybe<ListType>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateListInputType = {
  collection?: InputMaybe<Scalars['Int']['input']>;
  coverImage?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  eventDate: Scalars['String']['input'];
  name: Scalars['String']['input'];
  public?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  user: Scalars['String']['input'];
};

export type CreateUser = {
  __typename?: 'CreateUser';
  error?: Maybe<ApiErrorType>;
  success?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<UserType>;
};

export type CreateUserInputType = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateWaitlistUser = {
  __typename?: 'CreateWaitlistUser';
  error?: Maybe<ApiErrorType>;
  success?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<WaitlistUserType>;
};

export type DeleteList = {
  __typename?: 'DeleteList';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ListCollectionType = {
  __typename?: 'ListCollectionType';
  collectionLists: Array<ListType>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  uuid: Scalars['UUID']['output'];
};

export type ListImageType = {
  __typename?: 'ListImageType';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  list?: Maybe<ListType>;
  updatedAt: Scalars['DateTime']['output'];
  uuid: Scalars['UUID']['output'];
};

export type ListType = {
  __typename?: 'ListType';
  collection?: Maybe<ListCollectionType>;
  coverImage?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  eventDate: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  images: Array<ListImageType>;
  name: Scalars['String']['output'];
  public: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<UserType>;
  uuid: Scalars['UUID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createList?: Maybe<CreateList>;
  createUser?: Maybe<CreateUser>;
  createWaitlistUser?: Maybe<CreateWaitlistUser>;
  deleteList?: Maybe<DeleteList>;
  refreshToken?: Maybe<Refresh>;
  revokeToken?: Maybe<Revoke>;
  sendWaitlistEmail?: Maybe<SendEmail>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  updateList?: Maybe<UpdateList>;
  verifyToken?: Maybe<Verify>;
};


export type MutationCreateListArgs = {
  list: CreateListInputType;
};


export type MutationCreateUserArgs = {
  user: CreateUserInputType;
};


export type MutationCreateWaitlistUserArgs = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};


export type MutationDeleteListArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationRefreshTokenArgs = {
  refreshToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRevokeTokenArgs = {
  refreshToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSendWaitlistEmailArgs = {
  recipientEmail: Scalars['String']['input'];
  recipientFirstName: Scalars['String']['input'];
  type: Scalars['String']['input'];
};


export type MutationTokenAuthArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdateListArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationVerifyTokenArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar']['output'];
  refreshExpiresIn: Scalars['Int']['output'];
  refreshToken: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  allUsers?: Maybe<Array<Maybe<UserType>>>;
  getTimeline?: Maybe<Array<Maybe<TimelineItemType>>>;
  list?: Maybe<ListType>;
  lists?: Maybe<Array<Maybe<ListType>>>;
  user?: Maybe<UserType>;
};


export type QueryGetTimelineArgs = {
  keyword: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryListArgs = {
  slug?: InputMaybe<Scalars['String']['input']>;
  uuid: Scalars['String']['input'];
};


export type QueryListsArgs = {
  slug?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserArgs = {
  uuid: Scalars['String']['input'];
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar']['output'];
  refreshExpiresIn: Scalars['Int']['output'];
  refreshToken: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type Revoke = {
  __typename?: 'Revoke';
  revoked: Scalars['Int']['output'];
};

export type SendEmail = {
  __typename?: 'SendEmail';
  error?: Maybe<ApiErrorType>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type TimelineItemType = {
  __typename?: 'TimelineItemType';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  imageUrl: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type UpdateList = {
  __typename?: 'UpdateList';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type UserAddressType = {
  __typename?: 'UserAddressType';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  lineOne: Scalars['String']['output'];
  lineTwo?: Maybe<Scalars['String']['output']>;
  postcode: Scalars['String']['output'];
  public: Scalars['Boolean']['output'];
  state: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<UserType>;
  uuid: Scalars['UUID']['output'];
};

export type UserProfileType = {
  __typename?: 'UserProfileType';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  phoneNumber: Scalars['String']['output'];
  photo: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<UserType>;
  uuid: Scalars['UUID']['output'];
  website: Scalars['String']['output'];
};

export type UserType = {
  __typename?: 'UserType';
  addresses: Array<UserAddressType>;
  createdAt: Scalars['DateTime']['output'];
  dateJoined: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean']['output'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean']['output'];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean']['output'];
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  profile?: Maybe<UserProfileType>;
  updatedAt: Scalars['DateTime']['output'];
  userLists: Array<ListType>;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String']['output'];
  uuid: Scalars['UUID']['output'];
};

export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar']['output'];
};

export type WaitlistUserType = {
  __typename?: 'WaitlistUserType';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  uuid: Scalars['UUID']['output'];
};

export type CreateWaitlistUserMutationVariables = Exact<{
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;


export type CreateWaitlistUserMutation = { __typename?: 'Mutation', createWaitlistUser?: { __typename?: 'CreateWaitlistUser', success?: boolean | null } | null };


export const CreateWaitlistUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateWaitlistUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createWaitlistUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<CreateWaitlistUserMutation, CreateWaitlistUserMutationVariables>;