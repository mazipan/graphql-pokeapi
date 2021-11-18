import { getGenderByName } from '../requests/genders';

export default async (parent, params) => {
  return getGenderByName(params.gender);
};
