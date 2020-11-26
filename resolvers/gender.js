import { getGenderByName } from '../libs/genders';

export default async (parent, params, context) => {
  return getGenderByName(params.gender);
};
