import { PokedexInstance, handleError, hitSuccessCounter } from './utils';

export const getNaturesList = async () => {
  try {
    const response = await PokedexInstance.getNaturesList();
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
    console.error('> Error api getNaturesList()', error);
    return handleError(error);
  }
};

export const getNatureByName = async (nature = '') => {
  try {
    const response = await PokedexInstance.getNatureByName(nature);
    hitSuccessCounter();
    return { response, params: { nature }, status: true, message: '' };
  } catch (error) {
    console.error(`> Error api getNatureByName(${nature})`, error);
    return handleError(error);
  }
};
