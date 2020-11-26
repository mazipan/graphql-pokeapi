import { getMoveByName } from '../libs/moves';

export default async (parent, params, context) => {
  return getMoveByName(params.move);
};
