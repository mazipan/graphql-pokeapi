import { ApolloServer } from '@saeris/apollo-server-vercel';

import typeDefs from '../typeDefs';
import resolvers from '../resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

export default server.createHandler({
  cors: {
    origin: '*',
    methods: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
    allowedHeaders:
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
    credentials: true,
  },
});
