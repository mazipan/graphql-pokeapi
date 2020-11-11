import { getBerriesList } from '../libs/berries'

export default async (parent, params, context) => {
  return getBerriesList()
}
