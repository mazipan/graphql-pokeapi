import { getPokemonSpeciesList } from '../libs/species'

export default async (parent, params, context) => {
  return getPokemonSpeciesList()
}
