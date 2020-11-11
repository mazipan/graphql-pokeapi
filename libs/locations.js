import { PokedexInstance, handleError } from './utils'

export const getLocationsList = async () => {
  try {
    const response = await PokedexInstance.getLocationsList()
    if (response && response.results) {
      return { ...response, results: response.results, status: true, message: '' }
    }
    return { ...response, status: true, message: '' }
  } catch (error) {
    console.error('> Error api getLocationsList()', error)
    return handleError(error)
  }
}

export const getLocationByName = async (name = '') => {
  try {
    const response = await PokedexInstance.getLocationByName(name)
    return { response, status: true, message: '' }
  } catch (error) {
    console.error(`> Error api getLocationByName(${name})`, error)
    return handleError(error)
  }
}
