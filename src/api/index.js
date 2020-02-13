const Pokedex = require('pokedex-promise-v2');
const options = {
  versionPath: '/api/v2/',
  cacheLimit: 30 * 24 * 60 * 60 * 1000,
}

const P = new Pokedex(options);

export const getPokemonsList = async (limit = 20, offset = 1) => {
  return await P.getPokemonsList({
		limit,
		offset
	})
}

export const getMoveByName = async (name = '') => {
  return await P.getMoveByName(name)
}
