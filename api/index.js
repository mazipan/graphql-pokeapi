import { getCounter } from '../libs/utils';

export default async (req, res) => {
  const counter = await getCounter();

  res.json({
    hello: 'Welcome to GraphGL-PokeAPI',
    author: 'mazipan',
    url: 'https://graphql-pokeapi.vercel.app/api/graphql',
    hit: counter,
  });
};
