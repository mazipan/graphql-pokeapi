export default async (req, res) => {
  res.json({
    hello: 'Welcome to GraphGL-PokeAPI',
    author: 'mazipan',
    url: 'https://graphql-pokeapi.graphcdn.app',
    urlOrigin: 'https://gql-poke.mazipan.space/api/graphql',
  });
};
