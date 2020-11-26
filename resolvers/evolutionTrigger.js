import { getEvolutionTriggerByName } from '../libs/evolutions';

export default async (parent, params, context) => {
  return getEvolutionTriggerByName(params.name);
};
