import { getEncounterMethodByName } from '../libs/encounters'

export default async (parent, params, context) => {
  return getEncounterMethodByName(params.encounterMethod)
}
