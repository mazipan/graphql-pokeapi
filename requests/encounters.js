import { PokedexInstance, handleError, hitSuccessCounter, extractIdFromUrl } from '../utils';

export const getEncounterMethodsList = async () => {
  try {
    const response = await PokedexInstance.getEncounterMethodsList();
    hitSuccessCounter();
    if (response && response.results) {
      return {
        ...response,
        results: response.results.map((r) => {
          return {
            ...r,
            id: extractIdFromUrl(r.url),
          };
        }),
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

export const getEncounterMethodByName = async (encounterMethod = '') => {
  try {
    const response = await PokedexInstance.getEncounterMethodByName(encounterMethod);
    hitSuccessCounter();
    return { response, params: { encounterMethod }, status: true, message: '' };
  } catch (error) {
    console.error(`> Error api getEncounterMethodByName(${encounterMethod})`, error);
    return handleError(error);
  }
};
