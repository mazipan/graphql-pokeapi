import { getNatureByName } from '../libs/pokemons'

export default async (parent, params, context) => {
  return getNatureByName(params.nature)
}
