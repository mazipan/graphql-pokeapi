import { getEggGroupsList } from '../libs/eggGroup';

export default async (parent, params, context) => {
  return getEggGroupsList();
};
