import { getGenderByName } from '../libs/pokemons'

export default async (parent, params, context) => {
  return getGenderByName(params.gender)
}
