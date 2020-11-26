export default {
  typeDef: `type ListResponse {
		count: Int
		next: String
		previous: String
		results: [JSON]
		status: Boolean
		message: String
	}
`,
};
