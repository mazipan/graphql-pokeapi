import { getSuccessCounter, getErrorCounter } from '../utils';

export default async (req, res) => {
  const success = await getSuccessCounter();
  const error = await getErrorCounter();

  res.json({
    hello: 'Welcome to GraphGL-PokeAPI',
    author: 'mazipan',
    url: 'https://graphql-pokeapi.graphcdn.app',
    urlOrigin: 'https://graphql-pokeapi.vercel.app/api/graphql',
    success: success,
    error: error,
  });
};
