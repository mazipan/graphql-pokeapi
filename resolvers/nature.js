import { getNatureByName } from '../requests/natures';

export default async (parent, params) => {
  return getNatureByName(params.nature);
};
