import { getAbilityByName } from '../../api/pokemons'

export default async (parent, params, context) => {
  return getAbilityByName(params.ability)
}
