const Pokedex = require('pokedex-promise-v2')
const options = {
  versionPath: '/api/v2/',
  cacheLimit: 30 * 24 * 60 * 60 * 1000
}

const P = new Pokedex(options)

export const getPokemonsList = (limit = 20, offset = 1) => {
  return P.getPokemonsList({
    limit,
    offset
  })
}

export const getPokemonsDetail = (name = '') => {
  return P.getPokemonByName(name)
}

export const getMoveByName = (name = '') => {
  return P.getMoveByName(name)
}
