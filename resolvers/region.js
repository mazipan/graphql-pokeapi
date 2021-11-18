import { getRegionByName } from '../requests/regions';

export default async (parent, params) => {
  return getRegionByName(params.region);
};
