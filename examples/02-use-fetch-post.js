/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    count
    next
    previous
    status
    message
    results {
      url
      name
      image
    }
  }
}`;

const gqlVariables = {
  limit: 2,
  offset: 1,
};

fetch('https://graphql-pokeapi.vercel.app/api/graphql', {
  credentials: 'omit',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: gqlQuery,
    variables: gqlVariables,
  }),
  method: 'POST',
})
  .then((res) => res.json())
  .then((res) => console.log('Response from server', res));
