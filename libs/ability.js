import { PokedexInstance, handleError } from './utils'

export const getAbilityByName = async (name = '') => {
  try {
    const response = await PokedexInstance.getAbilityByName(name)
    return { response, status: true, message: '' }
  } catch (error) {
    console.error(`> Error api getAbilityByName(${name})`, error)
    return handleError(error)
  }
}
