const gql = require('graphql-tag')
const { makeExecutableSchema } = require('apollo-server')
const GraphQLJSON = require('graphql-type-json')

const Query = require('./queries').default
const Mutations = require('./mutations').default

const BaseResponse = require('./types/baseResponse').default
const BaseName = require('./types/baseName').default
const Ability = require('./types/pokemon/ability').default
const GameIndex = require('./types/pokemon/gameIndex').default
const VersionDetail = require('./types/pokemon/versionDetail').default
const HeldItem = require('./types/pokemon/heldItem').default
const VersionGroupDetail = require('./types/pokemon/versionGroupDetail').default
const Move = require('./types/pokemon/move').default
const Sprite = require('./types/pokemon/sprite').default
const Stat = require('./types/pokemon/stat').default
const Type = require('./types/pokemon/type').default
const Pokemon = require('./types/pokemon/pokemon').default
const PokemonItem = require('./types/pokemonItem').default
const PokemonList = require('./types/pokemonList').default

export const typeDefs = [
  BaseResponse,
  Ability,
  GameIndex,
  VersionDetail,
  HeldItem,
  VersionGroupDetail,
  Move,
  Sprite,
  Stat,
  Type,
  BaseName,
  Pokemon,
  PokemonItem,
  PokemonList,
  Query,
  Mutations
].map(({ typeDef }) => typeDef)

export const resolvers = {
  JSON: GraphQLJSON,
  Query: Query.resolvers,
  Mutation: Mutations.resolvers
}

const augmentedTypeDefs = Array.isArray(typeDefs) ? typeDefs : [typeDefs]

// We augment the typeDefs with the @cacheControl directive and associated
// scope enum, so makeExecutableSchema won't fail SDL validation
augmentedTypeDefs.push(
  gql`
    enum CacheControlScope {
      PUBLIC
      PRIVATE
    }
    directive @cacheControl(maxAge: Int, scope: CacheControlScope) on FIELD_DEFINITION | OBJECT | INTERFACE
  `
)

augmentedTypeDefs.push(gql`
  scalar JSON
`)

export const executableSchema = makeExecutableSchema({
  typeDefs: augmentedTypeDefs,
  resolvers
})
