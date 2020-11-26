import { getPokemonByName } from '../libs/pokemons';

export default async (parent, params) => {
  return getPokemonByName(params.name);
};
