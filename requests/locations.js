import { PokedexInstance, handleError, extractIdFromUrl } from '../utils';

export const getLocationsList = async () => {
  try {
    const response = await PokedexInstance.getLocationsList();
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
    console.error('> Error api getLocationsList()', error);
    return handleError(error);
  }
};

export const getLocationByName = async (location = '') => {
  try {
    const response = await PokedexInstance.getLocationByName(location);
    return { response, params: { location }, status: true, message: '' };
  } catch (error) {
    console.error(`> Error api getLocationByName(${location})`, error);
    return handleError(error);
  }
};
