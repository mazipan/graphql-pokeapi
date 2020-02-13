import { getPokemonsList } from '../../api'
export default async (parent, params, context) => {
	try {
		const response = await getPokemonsList(params.limit, params.offset);
		return { ...response, status: true, error: '' };
	} catch (error) {
		console.error('> Error resolver pokemons ', error);
		return {
			status: false,
			error: error
		};
	}
};
