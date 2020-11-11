import { getEggGroupByName } from '../libs/eggGroup'

export default async (parent, params, context) => {
  return getEggGroupByName(params.eggGroup)
}
