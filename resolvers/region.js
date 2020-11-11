import { getRegionByName } from '../libs/regions'

export default async (parent, params, context) => {
  return getRegionByName(params.region)
}
