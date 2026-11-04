import { PokedexInstance, handleError, extractIdFromUrl } from '../utils';

export const getEggGroupsList = async () => {
  try {
    const response = await PokedexInstance.getEggGroupsList();
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
    console.error('> Error api getEggGroupsList()', error);
    return handleError(error);
  }
};

export const getEggGroupByName = async (eggGroup = '') => {
  try {
    const response = await PokedexInstance.getEggGroupByName(eggGroup);
    return { response, params: { eggGroup }, status: true, message: '' };
  } catch (error) {
    console.error(`> Error api getEggGroupByName(${eggGroup})`, error);
    return handleError(error);
  }
};
