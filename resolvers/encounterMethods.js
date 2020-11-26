import { getEncounterMethodsList } from '../libs/encounters';

export default async (parent, params, context) => {
  return getEncounterMethodsList();
};
