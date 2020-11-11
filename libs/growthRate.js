import { PokedexInstance, handleError } from './utils'

export const getGrowthRatesList = async () => {
  try {
    const response = await PokedexInstance.getGrowthRatesList()
    if (response && response.results) {
      return { ...response, results: response.results, status: true, message: '' }
    }
    return { ...response, status: true, message: '' }
  } catch (error) {
    console.error('> Error api getGrowthRatesList()', error)
    return handleError(error)
  }
}

export const getGrowthRateByName = async (name = '') => {
  try {
    const response = await PokedexInstance.getGrowthRateByName(name)
    return { response, status: true, message: '' }
  } catch (error) {
    console.error(`> Error api getGrowthRateByName(${name})`, error)
    return handleError(error)
  }
}
