import { PokedexInstance, handleError, hitSuccessCounter } from './utils';

export const getEncounterMethodsList = async () => {
  try {
    const response = await PokedexInstance.getEncounterMethodsList();
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
    console.error('> Error api getEncounterMethodsList()', error);
    return handleError(error);
  }
};

export const getEncounterMethodByName = async (name = '') => {
  try {
    const response = await PokedexInstance.getEncounterMethodByName(name);
    hitSuccessCounter();
    return { response, status: true, message: '' };
  } catch (error) {
    console.error(`> Error api getEncounterMethodByName(${name})`, error);
    return handleError(error);
  }
};
