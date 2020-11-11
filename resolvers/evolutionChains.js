import { getEvolutionChainsList } from '../libs/evolutions'

export default async (parent, params, context) => {
  return getEvolutionChainsList()
}
