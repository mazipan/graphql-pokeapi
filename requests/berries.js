import { PokedexInstance, handleError, hitSuccessCounter, extractIdFromUrl } from '../utils';

export const getBerriesList = async () => {
  try {
    const response = await PokedexInstance.getBerriesList();
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
    console.error('> Error api getBerriesList()', error);
    return handleError(error);
  }
};

export const getBerryByName = async (berry = '') => {
  try {
    const response = await PokedexInstance.getBerryByName(berry);
    hitSuccessCounter();
    return { response, params: { berry }, status: true, message: '' };
  } catch (error) {
    console.error(`> Error api getBerryByName(${berry})`, error);
    return handleError(error);
  }
};
