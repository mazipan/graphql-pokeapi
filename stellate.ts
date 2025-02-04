import { Config } from 'stellate';

const config: Config = {
  config: {
    name: 'graphql-pokeapi',
    originUrl: 'https://graphql-pokeapi.vercel.app/api/graphql',
    schema: 'https://graphql-pokeapi.vercel.app/api/graphql',
    enablePlayground: true,
    rootTypeNames: {
      query: 'Query',
    },
    keyFields: {
      types: {},
    },
    rules: [
      {
        types: ['Query'],
        maxAge: 2592000,
        swr: 604800,
        description: 'Cache everything (default)',
      },
    ],
  },
};

export default config;
