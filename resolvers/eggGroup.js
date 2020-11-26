import { getEggGroupByName } from '../libs/eggGroup';

export default async (parent, params) => {
  return getEggGroupByName(params.eggGroup);
};
