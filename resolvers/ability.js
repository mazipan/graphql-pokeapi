import { getAbilityByName } from '../libs/ability';

export default async (parent, params) => {
  return getAbilityByName(params.ability);
};
