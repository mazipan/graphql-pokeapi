import { getEncounterMethodByName } from '../libs/encounters';

export default async (parent, params) => {
  return getEncounterMethodByName(params.encounterMethod);
};
