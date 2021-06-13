import { PokedexInstance, handleError, hitSuccessCounter, extractIdFromUrl } from './utils';

export const getGrowthRatesList = async () => {
  try {
    const response = await PokedexInstance.getGrowthRatesList();
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
    console.error('> Error api getGrowthRatesList()', error);
    return handleError(error);
  }
};

export const getGrowthRateByName = async (growthRate = '') => {
  try {
    const response = await PokedexInstance.getGrowthRateByName(growthRate);
    hitSuccessCounter();
    return { response, params: { growthRate }, status: true, message: '' };
  } catch (error) {
    console.error(`> Error api getGrowthRateByName(${growthRate})`, error);
    return handleError(error);
  }
};
