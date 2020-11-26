import { getLocationsList } from '../libs/locations';

export default async (parent, params, context) => {
  return getLocationsList();
};
