import { PokedexInstance, handleError } from './utils'

export const getAbilitiesList = async () => {
  try {
    const response = await PokedexInstance.getAbilitiesList()
    return { response, status: true, message: '' }
  } catch (error) {
    console.error('> Error api getAbilitiesList()', error)
    return handleError(error)
  }
}

export const getAbilityByName = async (name = '') => {
  try {
    const response = await PokedexInstance.getAbilityByName(name)
    return { response, status: true, message: '' }
  } catch (error) {
    console.error(`> Error api getAbilityByName(${name})`, error)
    return handleError(error)
  }
}
