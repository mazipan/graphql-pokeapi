const getApp = require('./express')
const graphQLServer = require('./graphql').default

const port = process.env.PORT || 5000
const main = async () => {
  const { app, server } = getApp()
  graphQLServer({ app, server })

  server.listen({ port }, () => {
    console.log(`GraphQL server listening for HTTP and WS on ${port}`)
  })
}

main()
