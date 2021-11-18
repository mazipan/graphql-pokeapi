import { getAbilityByName } from '../requests/ability';

export default async (parent, params) => {
  return getAbilityByName(params.ability);
};
