import { getMovesList } from '../libs/moves'

export default async (parent, params, context) => {
  return getMovesList()
}
