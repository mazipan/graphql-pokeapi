import { ApolloServer } from 'apollo-server-express'
import { resolvers, typeDefs } from './schema'

export default ({ app, server }) => {
  const apollo = new ApolloServer({
    resolvers,
    typeDefs,
    subscriptions: {
      keepAlive: 25000
    },

    path: '/graphql',
    introspection: true,
    playground: true
  })

  apollo.applyMiddleware({ app })
  apollo.installSubscriptionHandlers(server)
}
