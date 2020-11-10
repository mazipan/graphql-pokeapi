import { getMoveByName } from '../libs/pokemons'

export default async (parent, params, context) => {
  return getMoveByName(params.move)
}
