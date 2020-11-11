import { getNaturesList } from '../libs/natures'

export default async (parent, params, context) => {
  return getNaturesList()
}
