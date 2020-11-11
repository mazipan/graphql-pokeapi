import { PokedexInstance, handleError } from './utils'

export const getGenderByName = async (name = '') => {
  try {
    const response = await PokedexInstance.getGenderByName(name)
    return { response, status: true, message: '' }
  } catch (error) {
    console.error(`> Error api getGenderByName(${name})`, error)
    return handleError(error)
  }
}
