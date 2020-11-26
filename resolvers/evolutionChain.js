import { getEvolutionChainById } from '../libs/evolutions';

export default async (parent, params) => {
  return getEvolutionChainById(params.id);
};
