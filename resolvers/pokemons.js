import { getPokemonsList } from '../libs/pokemons';

export default async (parent, params) => {
  return getPokemonsList(params.limit, params.offset);
};
