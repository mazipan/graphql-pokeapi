const Pokedex = require('pokedex-promise-v2')
const options = {
  versionPath: '/api/v2/'
}

export const PokedexInstance = new Pokedex(options)

export const handleError = (error) => {
  return {
    status: false,
    message: error
  }
}
