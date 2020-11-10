import { getPokemonByName } from '../libs/pokemons'

export default async (parent, params, context) => {
  return getPokemonByName(params.name)
}
