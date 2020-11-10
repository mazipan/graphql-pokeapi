const Pokedex = require('pokedex-promise-v2')
const options = {
  versionPath: '/api/v2/',
  cacheLimit: 30 * 24 * 60 * 60 * 1000
}

export const PokedexInstance = new Pokedex(options)

export const handleError = (error) => {
  return {
    status: false,
    message: error
  }
}
