import { getAbilitiesList } from '../libs/ability';

export default async (parent, params, context) => {
  return getAbilitiesList();
};
