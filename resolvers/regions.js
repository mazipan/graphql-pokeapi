import { getRegionsList } from '../libs/regions'

export default async (parent, params, context) => {
  return getRegionsList()
}
