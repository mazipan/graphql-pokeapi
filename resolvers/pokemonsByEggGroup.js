import { getEggGroupByName } from '../../api/pokemons'

export default async (parent, params, context) => {
  return getEggGroupByName(params.eggGroup)
}
