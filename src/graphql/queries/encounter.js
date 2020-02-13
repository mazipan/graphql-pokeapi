import { getEncounterMethodByName } from '../../api/encounters'

export default async (parent, params, context) => {
  return getEncounterMethodByName(params.encounter)
}
