export default {
  name: 'Query',
  typeDef: `
	type Query {
		ability (ability: String!): BaseResponse
		eggGroup (eggGroup: String!): BaseResponse
		encounter (encounter: String!): BaseResponse
		gender (gender: String!): BaseResponse
		growthRate (growthRate: String!): BaseResponse
		move (move: String!): BaseResponse
		nature (nature: String!): BaseResponse
		pokemons (limit: Int, offset: Int): PokemonList
		pokemon (name: String!): Pokemon
	}
`
}
