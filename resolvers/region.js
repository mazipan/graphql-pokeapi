import { getRegionByName } from '../libs/regions';

export default async (parent, params) => {
  return getRegionByName(params.region);
};
