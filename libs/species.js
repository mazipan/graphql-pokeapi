import { PokedexInstance, handleError, hitSuccessCounter, extractIdFromUrl } from './utils';

export const getPokemonSpeciesList = async () => {
  try {
    const response = await PokedexInstance.getPokemonSpeciesList();
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
    console.error('> Error api getPokemonSpeciesList()', error);
    return handleError(error);
  }
};
