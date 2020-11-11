import { PokedexInstance, handleError } from './utils'

export const getGrowthRateByName = async (name = '') => {
  try {
    const response = await PokedexInstance.getGrowthRateByName(name)
    return { response, status: true, message: '' }
  } catch (error) {
    console.error(`> Error api getGrowthRateByName(${name})`, error)
    return handleError(error)
  }
}
