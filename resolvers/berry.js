import { getBerryByName } from '../requests/berries';

export default async (parent, params) => {
  return getBerryByName(params.berry);
};
