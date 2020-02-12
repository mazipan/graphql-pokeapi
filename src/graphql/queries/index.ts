import hello from './hello';

export default {
  name: 'Query',
  resolvers: {
    hello,
  },
  typeDef: `
  type Query {
    hello: Response
  }
`,
};
