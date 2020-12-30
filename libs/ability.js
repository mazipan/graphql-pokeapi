import { PokedexInstance, handleError, hitSuccessCounter } from './utils';

export const getAbilitiesList = async () => {
  try {
    const response = await PokedexInstance.getAbilitiesList();
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
    console.error('> Error api getAbilitiesList()', error);
    return handleError(error);
  }
};

export const getAbilityByName = async (ability = '') => {
  try {
    const response = await PokedexInstance.getAbilityByName(ability);
    hitSuccessCounter();
    return { response, params: { ability }, status: true, message: '' };
  } catch (error) {
    console.error(`> Error api getAbilityByName(${ability})`, error);
    return handleError(error);
  }
};
