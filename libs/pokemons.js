import { PokedexInstance, getOffset, handleError, hitSuccessCounter } from './utils';

const BASE_URL_POKEMON = 'https://pokeapi.co/api/v2/pokemon/';
const BASE_SPRITE = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export const getPokemonsList = async (limit = 20, offset = 1) => {
  try {
    const response = await PokedexInstance.getPokemonsList({ limit, offset });
    hitSuccessCounter();
    if (response && response.results) {
      const responseWithImage = response.results.map((i) => {
        const id = i.url.replace(BASE_URL_POKEMON, '').slice(0, -1);
        return {
          name: i.name,
          url: i.url,
          id: parseInt(id, 10),
          image: `${BASE_SPRITE}${id}.png`,
        };
      });

      const nextOffset = response.next ? getOffset(response.next) : 0;
      const prevOffset = response.previous ? getOffset(response.previous) : 0;

      return {
        ...response,
        params: { limit, offset },
        nextOffset,
        prevOffset,
        results: responseWithImage,
        status: true,
        message: '',
      };
    }
    return { ...response, params: { limit, offset }, status: true, message: '' };
  } catch (error) {
    console.error(`> Error api getPokemonsList(${limit}, ${offset})`, error);
    return handleError(error);
  }
};

export const getPokemonByName = async (name = '') => {
  try {
    const response = await PokedexInstance.getPokemonByName(name);
    hitSuccessCounter();
    return { ...response, params: { name }, status: true, message: '' };
  } catch (error) {
    console.error(`> Error api getPokemonByName(${name})`, error);
    return handleError(error);
  }
};
