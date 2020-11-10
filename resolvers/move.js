import { getMoveByName } from '../../api/moves'

export default async (parent, params, context) => {
  return getMoveByName(params.move)
}
