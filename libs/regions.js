import { PokedexInstance, handleError, hitSuccessCounter } from './utils';

export const getRegionsList = async () => {
  try {
    const response = await PokedexInstance.getRegionsList();
    hitSuccessCounter();
    if (response && response.results) {
      return { ...response, results: response.results, status: true, message: '' };
    }
    return { ...response, status: true, message: '' };
  } catch (error) {
    console.error('> Error api getRegionsList()', error);
    return handleError(error);
  }
};

export const getRegionByName = async (name = '') => {
  try {
    const response = await PokedexInstance.getRegionByName(name);
    hitSuccessCounter();
    return { response, status: true, message: '' };
  } catch (error) {
    console.error(`> Error api getRegionByName(${name})`, error);
    return handleError(error);
  }
};
