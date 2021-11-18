import { getEncounterMethodByName } from '../requests/encounters';

export default async (parent, params) => {
  return getEncounterMethodByName(params.encounterMethod);
};
