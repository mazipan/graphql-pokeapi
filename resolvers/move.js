import { getMoveByName } from '../requests/moves';

export default async (parent, params) => {
  return getMoveByName(params.move);
};
