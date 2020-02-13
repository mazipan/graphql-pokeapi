import pokemonsByAbility from './pokemonsByAbility'
import pokemonsByEggGroup from './pokemonsByEggGroup'
import pokemonsByGender from './pokemonsByGender'
import pokemonsByGrowthRate from './pokemonsByGrowthRate'
import pokemonsByMove from './pokemonsByMove'
import pokemonsByNature from './pokemonsByNature'
import pokemons from './pokemons'
import pokemon from './pokemon'

import encounter from './encounter'
import move from './move'

export default {
  name: 'Query',
  resolvers: {
		pokemonsByAbility,
		pokemonsByEggGroup,
		pokemonsByGender,
		pokemonsByGrowthRate,
		pokemonsByMove,
		pokemonsByNature,
    pokemons,
		pokemon,
		encounter,
		move
  },
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
