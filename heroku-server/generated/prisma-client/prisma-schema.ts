export const typeDefs = /* GraphQL */ `type AggregateLuiism {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Luiism {
  id: ID!
  value: String!
  definition: String!
  submittedBy: User
  favouritedBy(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type LuiismConnection {
  pageInfo: PageInfo!
  edges: [LuiismEdge]!
  aggregate: AggregateLuiism!
}

input LuiismCreateInput {
  value: String!
  definition: String!
  submittedBy: UserCreateOneWithoutSubmissionsInput
  favouritedBy: UserCreateManyWithoutFavouritesInput
}

input LuiismCreateManyWithoutFavouritedByInput {
  create: [LuiismCreateWithoutFavouritedByInput!]
  connect: [LuiismWhereUniqueInput!]
}

input LuiismCreateManyWithoutSubmittedByInput {
  create: [LuiismCreateWithoutSubmittedByInput!]
  connect: [LuiismWhereUniqueInput!]
}

input LuiismCreateWithoutFavouritedByInput {
  value: String!
  definition: String!
  submittedBy: UserCreateOneWithoutSubmissionsInput
}

input LuiismCreateWithoutSubmittedByInput {
  value: String!
  definition: String!
  favouritedBy: UserCreateManyWithoutFavouritesInput
}

type LuiismEdge {
  node: Luiism!
  cursor: String!
}

enum LuiismOrderByInput {
  id_ASC
  id_DESC
  value_ASC
  value_DESC
  definition_ASC
  definition_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LuiismPreviousValues {
  id: ID!
  value: String!
  definition: String!
}

input LuiismScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  definition: String
  definition_not: String
  definition_in: [String!]
  definition_not_in: [String!]
  definition_lt: String
  definition_lte: String
  definition_gt: String
  definition_gte: String
  definition_contains: String
  definition_not_contains: String
  definition_starts_with: String
  definition_not_starts_with: String
  definition_ends_with: String
  definition_not_ends_with: String
  AND: [LuiismScalarWhereInput!]
  OR: [LuiismScalarWhereInput!]
  NOT: [LuiismScalarWhereInput!]
}

type LuiismSubscriptionPayload {
  mutation: MutationType!
  node: Luiism
  updatedFields: [String!]
  previousValues: LuiismPreviousValues
}

input LuiismSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LuiismWhereInput
  AND: [LuiismSubscriptionWhereInput!]
  OR: [LuiismSubscriptionWhereInput!]
  NOT: [LuiismSubscriptionWhereInput!]
}

input LuiismUpdateInput {
  value: String
  definition: String
  submittedBy: UserUpdateOneWithoutSubmissionsInput
  favouritedBy: UserUpdateManyWithoutFavouritesInput
}

input LuiismUpdateManyDataInput {
  value: String
  definition: String
}

input LuiismUpdateManyMutationInput {
  value: String
  definition: String
}

input LuiismUpdateManyWithoutFavouritedByInput {
  create: [LuiismCreateWithoutFavouritedByInput!]
  delete: [LuiismWhereUniqueInput!]
  connect: [LuiismWhereUniqueInput!]
  set: [LuiismWhereUniqueInput!]
  disconnect: [LuiismWhereUniqueInput!]
  update: [LuiismUpdateWithWhereUniqueWithoutFavouritedByInput!]
  upsert: [LuiismUpsertWithWhereUniqueWithoutFavouritedByInput!]
  deleteMany: [LuiismScalarWhereInput!]
  updateMany: [LuiismUpdateManyWithWhereNestedInput!]
}

input LuiismUpdateManyWithoutSubmittedByInput {
  create: [LuiismCreateWithoutSubmittedByInput!]
  delete: [LuiismWhereUniqueInput!]
  connect: [LuiismWhereUniqueInput!]
  set: [LuiismWhereUniqueInput!]
  disconnect: [LuiismWhereUniqueInput!]
  update: [LuiismUpdateWithWhereUniqueWithoutSubmittedByInput!]
  upsert: [LuiismUpsertWithWhereUniqueWithoutSubmittedByInput!]
  deleteMany: [LuiismScalarWhereInput!]
  updateMany: [LuiismUpdateManyWithWhereNestedInput!]
}

input LuiismUpdateManyWithWhereNestedInput {
  where: LuiismScalarWhereInput!
  data: LuiismUpdateManyDataInput!
}

input LuiismUpdateWithoutFavouritedByDataInput {
  value: String
  definition: String
  submittedBy: UserUpdateOneWithoutSubmissionsInput
}

input LuiismUpdateWithoutSubmittedByDataInput {
  value: String
  definition: String
  favouritedBy: UserUpdateManyWithoutFavouritesInput
}

input LuiismUpdateWithWhereUniqueWithoutFavouritedByInput {
  where: LuiismWhereUniqueInput!
  data: LuiismUpdateWithoutFavouritedByDataInput!
}

input LuiismUpdateWithWhereUniqueWithoutSubmittedByInput {
  where: LuiismWhereUniqueInput!
  data: LuiismUpdateWithoutSubmittedByDataInput!
}

input LuiismUpsertWithWhereUniqueWithoutFavouritedByInput {
  where: LuiismWhereUniqueInput!
  update: LuiismUpdateWithoutFavouritedByDataInput!
  create: LuiismCreateWithoutFavouritedByInput!
}

input LuiismUpsertWithWhereUniqueWithoutSubmittedByInput {
  where: LuiismWhereUniqueInput!
  update: LuiismUpdateWithoutSubmittedByDataInput!
  create: LuiismCreateWithoutSubmittedByInput!
}

input LuiismWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  definition: String
  definition_not: String
  definition_in: [String!]
  definition_not_in: [String!]
  definition_lt: String
  definition_lte: String
  definition_gt: String
  definition_gte: String
  definition_contains: String
  definition_not_contains: String
  definition_starts_with: String
  definition_not_starts_with: String
  definition_ends_with: String
  definition_not_ends_with: String
  submittedBy: UserWhereInput
  favouritedBy_every: UserWhereInput
  favouritedBy_some: UserWhereInput
  favouritedBy_none: UserWhereInput
  AND: [LuiismWhereInput!]
  OR: [LuiismWhereInput!]
  NOT: [LuiismWhereInput!]
}

input LuiismWhereUniqueInput {
  id: ID
}

type Mutation {
  createLuiism(data: LuiismCreateInput!): Luiism!
  updateLuiism(data: LuiismUpdateInput!, where: LuiismWhereUniqueInput!): Luiism
  updateManyLuiisms(data: LuiismUpdateManyMutationInput!, where: LuiismWhereInput): BatchPayload!
  upsertLuiism(where: LuiismWhereUniqueInput!, create: LuiismCreateInput!, update: LuiismUpdateInput!): Luiism!
  deleteLuiism(where: LuiismWhereUniqueInput!): Luiism
  deleteManyLuiisms(where: LuiismWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  luiism(where: LuiismWhereUniqueInput!): Luiism
  luiisms(where: LuiismWhereInput, orderBy: LuiismOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Luiism]!
  luiismsConnection(where: LuiismWhereInput, orderBy: LuiismOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LuiismConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  luiism(where: LuiismSubscriptionWhereInput): LuiismSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  submissions(where: LuiismWhereInput, orderBy: LuiismOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Luiism!]
  favourites(where: LuiismWhereInput, orderBy: LuiismOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Luiism!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  submissions: LuiismCreateManyWithoutSubmittedByInput
  favourites: LuiismCreateManyWithoutFavouritedByInput
}

input UserCreateManyWithoutFavouritesInput {
  create: [UserCreateWithoutFavouritesInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutSubmissionsInput {
  create: UserCreateWithoutSubmissionsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutFavouritesInput {
  name: String!
  submissions: LuiismCreateManyWithoutSubmittedByInput
}

input UserCreateWithoutSubmissionsInput {
  name: String!
  favourites: LuiismCreateManyWithoutFavouritedByInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  submissions: LuiismUpdateManyWithoutSubmittedByInput
  favourites: LuiismUpdateManyWithoutFavouritedByInput
}

input UserUpdateManyDataInput {
  name: String
}

input UserUpdateManyMutationInput {
  name: String
}

input UserUpdateManyWithoutFavouritesInput {
  create: [UserCreateWithoutFavouritesInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFavouritesInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFavouritesInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneWithoutSubmissionsInput {
  create: UserCreateWithoutSubmissionsInput
  update: UserUpdateWithoutSubmissionsDataInput
  upsert: UserUpsertWithoutSubmissionsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutFavouritesDataInput {
  name: String
  submissions: LuiismUpdateManyWithoutSubmittedByInput
}

input UserUpdateWithoutSubmissionsDataInput {
  name: String
  favourites: LuiismUpdateManyWithoutFavouritedByInput
}

input UserUpdateWithWhereUniqueWithoutFavouritesInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFavouritesDataInput!
}

input UserUpsertWithoutSubmissionsInput {
  update: UserUpdateWithoutSubmissionsDataInput!
  create: UserCreateWithoutSubmissionsInput!
}

input UserUpsertWithWhereUniqueWithoutFavouritesInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFavouritesDataInput!
  create: UserCreateWithoutFavouritesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  submissions_every: LuiismWhereInput
  submissions_some: LuiismWhereInput
  submissions_none: LuiismWhereInput
  favourites_every: LuiismWhereInput
  favourites_some: LuiismWhereInput
  favourites_none: LuiismWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`