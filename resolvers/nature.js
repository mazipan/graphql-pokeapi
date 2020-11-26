import { getNatureByName } from '../libs/natures';

export default async (parent, params) => {
  return getNatureByName(params.nature);
};
