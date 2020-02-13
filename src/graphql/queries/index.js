import hello from './hello';
import pokemons from './pokemons';

export default {
  name: 'Query',
  resolvers: {
		hello,
		pokemons,
  },
  typeDef: `
  type Query {
		hello: Response
		pokemons (limit: Int, offset: Int): PokemonListResponse
  }
`,
};
