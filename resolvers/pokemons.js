import { getPokemonsList } from '../libs/pokemons'

export default async (parent, params, context) => {
  return getPokemonsList(params.limit, params.offset)
}
