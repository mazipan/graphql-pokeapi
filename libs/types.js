import { PokedexInstance, handleError } from './utils'

export const getTypesList = async () => {
  try {
    const response = await PokedexInstance.getTypesList()
    if (response && response.results) {
      return { ...response, results: response.results, status: true, message: '' }
    }
    return { ...response, status: true, message: '' }
  } catch (error) {
    console.error('> Error api getTypesList()', error)
    return handleError(error)
  }
}
