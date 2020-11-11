export default {
  name: 'Query',
  typeDef: `
	type Query {
		abilities (): BaseResponse
		ability (ability: String!): BaseResponse
		eggGroups (): BaseResponse
		eggGroup (eggGroup: String!): BaseResponse
		encounterMethods (): BaseResponse
		encounterMethod (encounterMethod: String!): BaseResponse
		genders (): BaseResponse
		gender (gender: String!): BaseResponse
		growthRates (): BaseResponse
		growthRate (growthRate: String!): BaseResponse
		moves (): BaseResponse
		move (move: String!): BaseResponse
		natures (): BaseResponse
		nature (nature: String!): BaseResponse
		pokemons (limit: Int, offset: Int): PokemonList
		pokemon (name: String!): Pokemon
	}
`
}
