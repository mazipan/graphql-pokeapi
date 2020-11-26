import { getLocationByName } from '../libs/locations';

export default async (parent, params, context) => {
  return getLocationByName(params.location);
};
