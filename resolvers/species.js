import { getPokemonSpeciesList } from '../requests/species';

export default async () => {
  return getPokemonSpeciesList();
};
