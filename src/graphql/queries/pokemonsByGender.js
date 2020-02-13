import { getGenderByName } from '../../api/pokemons'

export default async (parent, params, context) => {
  return getGenderByName(params.gender)
}
