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

const params = {
  query: gqlQuery,
  variables: gqlVariables,
};

const queryString = Object.keys(params)
  .map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
  })
  .join('&');

fetch(`https://graphql-pokeapi.vercel.app/api/graphql?${queryString}`, {
  credentials: 'omit',
  headers: { 'Content-Type': 'application/json' },
  method: 'GET',
})
  .then((res) => res.json())
  .then((res) => console.log('Response from server', res));
