import { PokedexInstance, handleError } from './utils'

export const getEncounterMethodByName = async (name = '') => {
  try {
    const response = await PokedexInstance.getEncounterMethodByName(name)
    return { response, status: true, message: '' }
  } catch (error) {
    console.error(`> Error api getEncounterMethodByName(${name})`, error)
    return handleError(error)
  }
}
