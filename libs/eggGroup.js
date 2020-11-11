import { PokedexInstance, handleError } from './utils'

export const getEggGroupsList = async () => {
  try {
    const response = await PokedexInstance.getEggGroupsList()
    return { response, status: true, message: '' }
  } catch (error) {
    console.error('> Error api getEggGroupsList()', error)
    return handleError(error)
  }
}

export const getEggGroupByName = async (name = '') => {
  try {
    const response = await PokedexInstance.getEggGroupByName(name)
    return { response, status: true, message: '' }
  } catch (error) {
    console.error(`> Error api getEggGroupByName(${name})`, error)
    return handleError(error)
  }
}
