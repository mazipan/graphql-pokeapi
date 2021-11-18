import { getPokemonsList } from '../requests/pokemons';

export default async (parent, params) => {
  return getPokemonsList(params.limit, params.offset);
};
