import { getEvolutionTriggerByName } from '../requests/evolutions';

export default async (parent, params) => {
  return getEvolutionTriggerByName(params.name);
};
