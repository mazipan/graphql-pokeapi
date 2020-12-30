/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
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
  }
`;

const gqlVariables = {
  limit: 2,
  offset: 1,
};

export const Todos = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log('Response from server', data);
  return 'Success!';
};
