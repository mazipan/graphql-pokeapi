import { getAbilityByName } from '../libs/ability';

export default async (parent, params, context) => {
  return getAbilityByName(params.ability);
};
