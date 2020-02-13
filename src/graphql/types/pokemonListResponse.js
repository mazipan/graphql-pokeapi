export default {
  typeDef: `
  type PokemonListResponse {
		count: Int
		next: String
		previous: String
		results: [Pokemon]
		status: Boolean
		error: String
  }
`,
};
