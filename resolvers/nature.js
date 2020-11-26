import { getNatureByName } from '../libs/natures';

export default async (parent, params, context) => {
  return getNatureByName(params.nature);
};
