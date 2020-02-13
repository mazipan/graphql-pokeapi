import { getMoveByName } from '../../api/pokemons'

export default async (parent, params, context) => {
  return getMoveByName(params.move)
}
