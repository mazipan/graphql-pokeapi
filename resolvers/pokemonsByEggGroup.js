import { getEggGroupByName } from '../libs/pokemons'

export default async (parent, params, context) => {
  return getEggGroupByName(params.eggGroup)
}
