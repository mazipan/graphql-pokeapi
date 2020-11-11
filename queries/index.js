export default {
  name: 'Query',
  typeDef: `
	type Query {
		abilities: BaseList
		ability (ability: String!): BaseResponse
		eggGroups: BaseList
		eggGroup (eggGroup: String!): BaseResponse
		encounterMethods: BaseList
		encounterMethod (encounterMethod: String!): BaseResponse
		genders : BaseList
		gender (gender: String!): BaseResponse
		growthRates: BaseList
		growthRate (growthRate: String!): BaseResponse
		moves: BaseList
		move (move: String!): BaseResponse
		natures: BaseList
		nature (nature: String!): BaseResponse
		pokemons (limit: Int, offset: Int): PokemonList
		pokemon (name: String!): Pokemon
	}
`
}
