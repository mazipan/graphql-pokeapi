import { getGrowthRateByName } from '../../api/pokemons'

export default async (parent, params, context) => {
  return getGrowthRateByName(params.growthRate)
}
