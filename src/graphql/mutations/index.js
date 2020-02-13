import hello from './hello'

export default {
  name: 'Mutation',
  resolvers: {
    hello
  },
  typeDef: `
  type Mutation {
    hello: BaseResponse
  }
`
}
