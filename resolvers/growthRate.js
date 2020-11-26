import { getGrowthRateByName } from '../libs/growthRate';

export default async (parent, params, context) => {
  return getGrowthRateByName(params.growthRate);
};
