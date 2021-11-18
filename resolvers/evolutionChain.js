import { getEvolutionChainById } from '../requests/evolutions';

export default async (parent, params) => {
  return getEvolutionChainById(params.id);
};
