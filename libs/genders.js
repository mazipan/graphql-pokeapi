import { PokedexInstance, handleError, hitSuccessCounter } from './utils';

export const getGendersList = async () => {
  try {
    const response = await PokedexInstance.getGendersList();
    hitSuccessCounter();
    if (response && response.results) {
      return {
        ...response,
        results: response.results,
        status: true,
        message: '',
      };
    }
    return { ...response, status: true, message: '' };
  } catch (error) {
    console.error('> Error api getGendersList()', error);
    return handleError(error);
  }
};

export const getGenderByName = async (name = '') => {
  try {
    const response = await PokedexInstance.getGenderByName(name);
    hitSuccessCounter();
    return { response, status: true, message: '' };
  } catch (error) {
    console.error(`> Error api getGenderByName(${name})`, error);
    return handleError(error);
  }
};
