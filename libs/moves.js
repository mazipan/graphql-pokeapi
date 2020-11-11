import { PokedexInstance, handleError } from './utils'

export const getMovesList = async () => {
  try {
    const response = await PokedexInstance.getMovesList()
    return { response, status: true, message: '' }
  } catch (error) {
    console.error('> Error api getMovesList()', error)
    return handleError(error)
  }
}

export const getMoveByName = async (name = '') => {
  try {
    const response = await PokedexInstance.getMoveByName(name)
    return { response, status: true, message: '' }
  } catch (error) {
    console.error(`> Error api getMoveByName(${name})`, error)
    return handleError(error)
  }
}
