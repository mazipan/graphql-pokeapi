import { getBerryByName } from '../libs/berries';

export default async (parent, params, context) => {
  return getBerryByName(params.berry);
};
