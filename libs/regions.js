import { PokedexInstance, handleError, hitSuccessCounter, extractIdFromUrl } from './utils';

export const getRegionsList = async () => {
  try {
    const response = await PokedexInstance.getRegionsList();
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
    console.error('> Error api getRegionsList()', error);
    return handleError(error);
  }
};

export const getRegionByName = async (region = '') => {
  try {
    const response = await PokedexInstance.getRegionByName(region);
    hitSuccessCounter();
    return { response, params: { region }, status: true, message: '' };
  } catch (error) {
    console.error(`> Error api getRegionByName(${region})`, error);
    return handleError(error);
  }
};
