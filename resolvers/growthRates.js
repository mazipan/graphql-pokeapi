import { getGrowthRatesList } from '../libs/growthRate'

export default async (parent, params, context) => {
  return getGrowthRatesList()
}
