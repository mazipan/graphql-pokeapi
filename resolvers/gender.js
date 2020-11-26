import { getGenderByName } from '../libs/genders';

export default async (parent, params) => {
  return getGenderByName(params.gender);
};
