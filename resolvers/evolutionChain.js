import { getEvolutionChainById } from '../libs/evolutions'

export default async (parent, params, context) => {
  return getEvolutionChainById(params.id)
}
