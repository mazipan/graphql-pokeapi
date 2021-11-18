import { getGrowthRateByName } from '../requests/growthRate';

export default async (parent, params) => {
  return getGrowthRateByName(params.growthRate);
};
