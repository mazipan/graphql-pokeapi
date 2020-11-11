import { PokedexInstance, handleError } from './utils'

export const getPokemonSpeciesList = async () => {
  try {
    const response = await PokedexInstance.getPokemonSpeciesList()
    if (response && response.results) {
      return { ...response, results: response.results, status: true, message: '' }
    }
    return { ...response, status: true, message: '' }
  } catch (error) {
    console.error('> Error api getPokemonSpeciesList()', error)
    return handleError(error)
  }
}
