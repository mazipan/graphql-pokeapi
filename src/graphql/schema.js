/* eslint @typescript-eslint/no-var-requires: 0 */
const gql = require('graphql-tag');
const { makeExecutableSchema } = require('apollo-server');
const { GraphQLUpload } = require('graphql-upload');
const GraphQLJSON = require('graphql-type-json');
const { GraphQLJSONObject } = require('graphql-type-json');

const Query = require('./queries').default;
const Mutations = require('./mutations').default;

const Response = require('./types/response').default;

export const typeDefs = [
  Response,
  Query,
  Mutations,
].map(({ typeDef }) => typeDef);

export const resolvers = {
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
  Query: Query.resolvers,
  Mutation: Mutations.resolvers,
};


if (resolvers && !resolvers.Upload) {

  resolvers.Upload = GraphQLUpload;
}

const augmentedTypeDefs = Array.isArray(typeDefs) ? typeDefs : [typeDefs];

// We augment the typeDefs with the @cacheControl directive and associated
// scope enum, so makeExecutableSchema won't fail SDL validation
augmentedTypeDefs.push(
  gql`
    enum CacheControlScope {
      PUBLIC
      PRIVATE
    }
    directive @cacheControl(maxAge: Int, scope: CacheControlScope) on FIELD_DEFINITION | OBJECT | INTERFACE
  `,
);
// We augment the typeDefs with the Upload scalar, so typeDefs that
// don't include it won't fail
augmentedTypeDefs.push(gql`
  scalar Upload
`);
augmentedTypeDefs.push(gql`
  scalar JSON
`);
augmentedTypeDefs.push(gql`
  scalar JSONObject
`);

export const executableSchema = makeExecutableSchema({
  typeDefs: augmentedTypeDefs,
  resolvers,
});
