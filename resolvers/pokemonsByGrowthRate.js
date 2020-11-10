import { getGrowthRateByName } from '../libs/pokemons'

export default async (parent, params, context) => {
  return getGrowthRateByName(params.growthRate)
}
