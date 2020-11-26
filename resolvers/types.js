import { getTypesList } from '../libs/types';

export default async (parent, params, context) => {
  return getTypesList();
};
