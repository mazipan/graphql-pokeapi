import fetch from 'node-fetch';
import Pokedex from 'pokedex-promise-v2';

const options = {
  versionPath: '/api/v2/',
};

export const PokedexInstance = new Pokedex(options);

export const hitSuccessCounterUrl = 'https://api.countapi.xyz/hit/graphql-pokeapi/hits';
export const hitErrorCounterUrl = 'https://api.countapi.xyz/hit/graphql-pokeapi/errors';
export const getSuccessCounterUrl = 'https://api.countapi.xyz/get/graphql-pokeapi/hits';
export const getErrorCounterUrl = 'https://api.countapi.xyz/get/graphql-pokeapi/errors';

export const hitApi = (url) => {
  setTimeout(async () => {
    try {
      const response = await fetch(url);
      await response.json();
    } catch (error) {
      console.error(`> Error on hit api: ${url}`, error);
    }
  }, 50);
};

export const getApi = async (url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(`> Error on get api: ${url}`, error);
  }
  return null;
};

export const hitSuccessCounter = () => {
  hitApi(hitSuccessCounterUrl);
};

export const hitErrorCounter = () => {
  hitApi(hitErrorCounterUrl);
};

export const getSuccessCounter = async () => {
  return await getApi(getSuccessCounterUrl);
};

export const getErrorCounter = async () => {
  return await getApi(getErrorCounterUrl);
};

export const handleError = (error) => {
  hitErrorCounter();

  return {
    status: false,
    message: error,
  };
};
