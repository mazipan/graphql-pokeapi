import { PokedexInstance, handleError, hitSuccessCounter } from './utils';

export const getMovesList = async () => {
  try {
    const response = await PokedexInstance.getMovesList();
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
    console.error('> Error api getMovesList()', error);
    return handleError(error);
  }
};

export const getMoveByName = async (move = '') => {
  try {
    const response = await PokedexInstance.getMoveByName(move);
    hitSuccessCounter();
    return { response, params: { move }, status: true, message: '' };
  } catch (error) {
    console.error(`> Error api getMoveByName(${move})`, error);
    return handleError(error);
  }
};
