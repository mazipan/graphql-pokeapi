import { getEvolutionTriggerByName } from '../libs/evolutions';

export default async (parent, params) => {
  return getEvolutionTriggerByName(params.name);
};
