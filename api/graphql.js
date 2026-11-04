import { ApolloServer, HeaderMap } from '@apollo/server';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

import typeDefs from '../typeDefs';
import resolvers from '../resolvers';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
  'Access-Control-Allow-Headers':
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  'Access-Control-Allow-Credentials': 'true',
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true, includeCookies: false })],
});

const started = server.start();

export default async (req, res) => {
  Object.entries(CORS_HEADERS).forEach(([key, value]) => res.setHeader(key, value));

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  await started;

  const headers = new HeaderMap();
  Object.entries(req.headers).forEach(([key, value]) => {
    if (value !== undefined) headers.set(key, Array.isArray(value) ? value.join(', ') : value);
  });

  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  const httpGraphQLResponse = await server.executeHTTPGraphQLRequest({
    httpGraphQLRequest: {
      method: req.method.toUpperCase(),
      headers,
      search: url.search,
      body: req.body,
    },
    context: async () => ({ req, res }),
  });

  httpGraphQLResponse.headers.forEach((value, key) => res.setHeader(key, value));
  res.statusCode = httpGraphQLResponse.status || 200;

  if (httpGraphQLResponse.body.kind === 'complete') {
    res.end(httpGraphQLResponse.body.string);
    return;
  }

  for await (const chunk of httpGraphQLResponse.body.asyncIterator) {
    res.write(chunk);
  }
  res.end();
};
