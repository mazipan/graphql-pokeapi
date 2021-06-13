import { PokedexInstance, handleError, hitSuccessCounter, extractIdFromUrl } from './utils';

export const getGendersList = async () => {
  try {
    const response = await PokedexInstance.getGendersList();
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
    console.error('> Error api getGendersList()', error);
    return handleError(error);
  }
};

export const getGenderByName = async (gender = '') => {
  try {
    const response = await PokedexInstance.getGenderByName(gender);
    hitSuccessCounter();
    return { response, params: { gender }, status: true, message: '' };
  } catch (error) {
    console.error(`> Error api getGenderByName(${gender})`, error);
    return handleError(error);
  }
};
