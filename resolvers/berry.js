import { getBerryByName } from '../libs/berries';

export default async (parent, params) => {
  return getBerryByName(params.berry);
};
