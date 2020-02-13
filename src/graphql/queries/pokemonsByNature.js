import { getNatureByName } from '../../api/pokemons'

export default async (parent, params, context) => {
  return getNatureByName(params.nature)
}
