import { getEvolutionChainsList } from '../requests/evolutions';

export default async () => {
  return getEvolutionChainsList();
};
