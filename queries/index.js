export default {
  name: 'Query',
  typeDef: `
  type Query {
		pokemonsByAbility (ability: String!): BaseResponse
		pokemonsByEggGroup (eggGroup: String!): BaseResponse
		pokemonsByGender (gender: String!): BaseResponse
		pokemonsByGrowthRate (growthRate: String!): BaseResponse
		pokemonsByMove (move: String!): BaseResponse
		pokemonsByNature (nature: String!): BaseResponse
		pokemons (limit: Int, offset: Int): PokemonList
		pokemon (name: String!): Pokemon
		encounter (encounter: String!): BaseResponse
		move (move: String!): BaseResponse
	}
`
}
