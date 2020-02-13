export default {
  typeDef: `
  type PokemonList {
		count: Int
		next: String
		previous: String
		results: [BaseName]
		status: Boolean
		message: String
	}
`,
};
