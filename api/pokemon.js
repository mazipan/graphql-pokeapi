import { ApolloServer } from '@saeris/apollo-server-vercel'

import BaseResponse from './types/baseResponse'
import BaseName from './types/baseName'
import Ability from './types/pokemon/ability'
import GameIndex from './types/pokemon/gameIndex'
import VersionDetail from './types/pokemon/versionDetail'
import HeldItem from './types/pokemon/heldItem'
import VersionGroupDetail from './types/pokemon/versionGroupDetail'
import Move from './types/pokemon/move'
import Sprite from './types/pokemon/sprite'
import Stat from './types/pokemon/stat'
import Type from './types/pokemon/type'
import Pokemon from './types/pokemon/pokemon'
import PokemonItem from './types/pokemonItem'
import PokemonList from './types/pokemonList'

import queries from '../queries'

import pokemonsByAbilityResolver from '../resolver/pokemonsByAbility'
import pokemonsByEggGroupResolver from '../resolver/pokemonsByEggGroup'
import pokemonsByGenderResolver from '../resolver/pokemonsByGender'
import pokemonsByGrowthRateResolver from '../resolver/pokemonsByGrowthRate'
import pokemonsByMoveResolver from '../resolver/pokemonsByMove'
import pokemonsByNatureResolver from '../resolver/pokemonsByNature'
import pokemonsResolver from '../resolver/pokemons'
import pokemonResolver from '../resolver/pokemon'

// Construct a schema, using GraphQL schema language
const typeDefs = `
${BaseResponse.typeDef}
${Ability.typeDef}
${GameIndex.typeDef}
${VersionDetail.typeDef}
${HeldItem.typeDef}
${VersionGroupDetail.typeDef}
${Move.typeDef}
${Sprite.typeDef}
${Stat.typeDef}
${Type.typeDef}
${BaseName.typeDef}
${Pokemon.typeDef}
${PokemonItem.typeDef}
${PokemonList.typeDef}
${queries.typeDef}
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    pokemonsByAbility: () => pokemonsByAbilityResolver,
    pokemonsByEggGroup: () => pokemonsByEggGroupResolver,
    pokemonsByGender: () => pokemonsByGenderResolver,
    pokemonsByGrowthRate: () => pokemonsByGrowthRateResolver,
    pokemonsByMove: () => pokemonsByMoveResolver,
    pokemonsByNature: () => pokemonsByNatureResolver,
    pokemons: () => pokemonsResolver,
    pokemon: () => pokemonResolver
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
})

export default server.createHandler()
