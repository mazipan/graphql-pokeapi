import { PokedexInstance, handleError} from './utils';

export const getPokemonsList = async (limit = 20, offset = 1) => {
  try {
    const response = await PokedexInstance.getPokemonsList({ limit, offset })
    return { ...response, status: true, message: '' }
  } catch (error) {
    console.error(`> Error api getPokemonsList(${limit}, ${offset})`, error)
    return handleError(error)
  }
}

export const getPokemonByName = async (name = '') => {
  try {
    const response = await PokedexInstance.getPokemonByName(name)
    return { ...response, status: true, message: '' }
  } catch (error) {
    console.error(`> Error api getPokemonByName(${name})`, error)
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

export const getAbilityByName = async (name = '') => {
  try {
    const response = await PokedexInstance.getAbilityByName(name)
    return { response, status: true, message: '' }
  } catch (error) {
    console.error(`> Error api getAbilityByName(${name})`, error)
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

export const getGenderByName = async (name = '') => {
  try {
    const response = await PokedexInstance.getGenderByName(name)
    return { response, status: true, message: '' }
  } catch (error) {
    console.error(`> Error api getGenderByName(${name})`, error)
    return handleError(error)
  }
}

export const getGrowthRateByName = async (name = '') => {
  try {
    const response = await PokedexInstance.getGrowthRateByName(name)
    return { response, status: true, message: '' }
  } catch (error) {
    console.error(`> Error api getGrowthRateByName(${name})`, error)
    return handleError(error)
  }
}

export const getNatureByName = async (name = '') => {
  try {
    const response = await PokedexInstance.getNatureByName(name)
    return { response, status: true, message: '' }
  } catch (error) {
    console.error(`> Error api getNatureByName(${name})`, error)
    return handleError(error)
  }
}
