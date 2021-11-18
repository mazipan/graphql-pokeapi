import { getPokemonByName } from '../requests/pokemons';

export default async (parent, params) => {
  return getPokemonByName(params.name);
};
