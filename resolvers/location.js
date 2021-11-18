import { getLocationByName } from '../requests/locations';

export default async (parent, params) => {
  return getLocationByName(params.location);
};
