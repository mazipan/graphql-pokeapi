import { getPokemonsList } from '../../api/pokemons'

export default async (parent, params, context) => {
  return getPokemonsList(params.limit, params.offset)
}
