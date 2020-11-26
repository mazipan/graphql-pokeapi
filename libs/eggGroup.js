import { PokedexInstance, handleError, hitSuccessCounter } from './utils';

export const getEggGroupsList = async () => {
  try {
    const response = await PokedexInstance.getEggGroupsList();
    hitSuccessCounter();
    if (response && response.results) {
      return { ...response, results: response.results, status: true, message: '' };
    }
    return { ...response, status: true, message: '' };
  } catch (error) {
    console.error('> Error api getEggGroupsList()', error);
    return handleError(error);
  }
};

export const getEggGroupByName = async (name = '') => {
  try {
    const response = await PokedexInstance.getEggGroupByName(name);
    hitSuccessCounter();
    return { response, status: true, message: '' };
  } catch (error) {
    console.error(`> Error api getEggGroupByName(${name})`, error);
    return handleError(error);
  }
};
