import { getGendersList } from '../libs/genders';

export default async (parent, params, context) => {
  return getGendersList();
};
