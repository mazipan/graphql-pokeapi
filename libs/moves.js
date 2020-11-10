import { PokedexInstance, handleError } from './utils'

export const getMoveByName = async (name = '') => {
  try {
    const response = await PokedexInstance.getMoveByName(name)
    return { response, status: true, message: '' }
  } catch (error) {
    console.error(`> Error api getMoveByName(${name})`, error)
    return handleError(error)
  }
}
