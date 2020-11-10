import { getAbilityByName } from '../libs/pokemons'

export default async (parent, params, context) => {
  return getAbilityByName(params.ability)
}
