import { getMoveByName } from '../libs/moves';

export default async (parent, params) => {
  return getMoveByName(params.move);
};
