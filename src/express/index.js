const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')

const HealthRoutes = require('./routes/HealthRoutes')

module.exports = () => {
  const app = express()

  app.use(bodyParser.json())

  app.use(bodyParser.urlencoded({ extended: false }))

  app.get('/', (_, res) => {
    res.send('<div style="display: flex;flex-direction: column;justify-content: center;align-items: center;text-align: center;min-height: 100vh;"><h1>Hello from GraphQL-PokeApi</h1> <br/> <a href="/graphql">Visit graphql playground</a></div>')
    res.end(200)
  })

  app.get('/ping', (_, res) => {
    res.send('pong')
    res.end(200)
  })

  app.use('/health', HealthRoutes)

  const server = http.createServer(app)
  return { app, server }
}
