import { getEggGroupByName } from '../requests/eggGroup';

export default async (parent, params) => {
  return getEggGroupByName(params.eggGroup);
};
