import { getLocationByName } from '../libs/locations';

export default async (parent, params) => {
  return getLocationByName(params.location);
};
