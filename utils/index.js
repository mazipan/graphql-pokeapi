import Pokedex from 'pokedex-promise-v2';

const options = {
  versionPath: '/api/v2/',
};

export const PokedexInstance = new Pokedex(options);

export const extractIdFromUrl = (url) => {
  const urls = url.split('/').filter((u) => Boolean(u));
  const id = urls.length > 0 ? urls[urls.length - 1] : '1';
  return parseInt(id, 10);
};

export const getOffset = (url) => {
  const { search } = new URL(url);
  const offset = new URLSearchParams(search).get('offset');
  return offset ? parseInt(offset, 10) : 0;
};

export const handleError = (error) => {
  return {
    status: false,
    message: error,
  };
};
