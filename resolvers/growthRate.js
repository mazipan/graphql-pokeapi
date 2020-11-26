import { getGrowthRateByName } from '../libs/growthRate';

export default async (parent, params) => {
  return getGrowthRateByName(params.growthRate);
};
