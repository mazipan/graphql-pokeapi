import { getPokemonByName } from '../../api/pokemons'

export default async (parent, params, context) => {
  return getPokemonByName(params.name)
}
