import { getEvolutionTriggersList } from '../requests/evolutions';

export default async () => {
  return getEvolutionTriggersList();
};
