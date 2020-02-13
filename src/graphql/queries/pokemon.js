import { getPokemonsDetail } from '../../api'

export default async (parent, params, context) => {
  try {
    const response = await getPokemonsDetail(params.name)
    return { ...response, status: true, message: '' }
  } catch (error) {
    console.error(`> Error resolver pokemon detail ${params.name}`, error)
    return {
      status: false,
      message: error
    }
  }
}
