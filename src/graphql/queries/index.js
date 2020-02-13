import hello from './hello';
import pokemons from './pokemons';
import pokemon from './pokemon';

export default {
  name: 'Query',
  resolvers: {
		hello,
		pokemons,
		pokemon,
  },
  typeDef: `
  type Query {
		hello: BaseResponse
		pokemons (limit: Int, offset: Int): PokemonList
		pokemon (name: String!): Pokemon
  }
`,
};
