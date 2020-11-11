import { PokedexInstance, handleError } from './utils'

const EVO_CHAIN = 'https://pokeapi.co/api/v2/evolution-chain/'

export const getEvolutionChainsList = async () => {
  try {
    const response = await PokedexInstance.getEvolutionChainsList()
    if (response && response.results) {
      const responseWithName = response.results.map(i => {
        const name = i.url.replace(EVO_CHAIN, '').slice(0, -1)
        return {
          name: name,
          url: i.url
        }
      })
      return { ...response, results: responseWithName, status: true, message: '' }
    }
    return { ...response, status: true, message: '' }
  } catch (error) {
    console.error('> Error api getEvolutionChainsList()', error)
    return handleError(error)
  }
}

export const getEvolutionChainById = async (name = '') => {
  try {
    const response = await PokedexInstance.getEvolutionChainById(name)
    return { response, status: true, message: '' }
  } catch (error) {
    console.error(`> Error api getEvolutionChainById(${name})`, error)
    return handleError(error)
  }
}

export const getEvolutionTriggersList = async () => {
  try {
    const response = await PokedexInstance.getEvolutionTriggersList()
    if (response && response.results) {
      return { ...response, results: response.results, status: true, message: '' }
    }
    return { ...response, status: true, message: '' }
  } catch (error) {
    console.error('> Error api getEvolutionTriggersList()', error)
    return handleError(error)
  }
}

export const getEvolutionTriggerByName = async (name = '') => {
  try {
    const response = await PokedexInstance.getEvolutionTriggerByName(name)
    return { response, status: true, message: '' }
  } catch (error) {
    console.error(`> Error api getEvolutionTriggerByName(${name})`, error)
    return handleError(error)
  }
}
