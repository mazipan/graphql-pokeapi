# graphql-pokeapi

GraphQL implementation of pokeapi.co

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/mazipan/graphql-pokeapi)

## Graphql Playground

[mazipan-gql-pokeapi.herokuapp.com/](https://mazipan-gql-pokeapi.herokuapp.com/)

## Queries

### getPokemonList

Sample Query:

```js
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
    }
  }
}
```

Sample Variables:

```json
{
  "limit": 2,
  "offset": 1
}
```

Sample Result:

```json
{
  "data": {
    "pokemons": {
      "count": 964,
      "next": "https://pokeapi.co/api/v2/pokemon/?offset=6&limit=6",
      "previous": null,
      "results": [
        {
          "url": "https://pokeapi.co/api/v2/pokemon/1/",
          "name": "bulbasaur"
        },
        {
          "url": "https://pokeapi.co/api/v2/pokemon/2/",
          "name": "ivysaur"
        }
      ],
      "status": true,
      "message": ""
    }
  }
}
```

### getPokemonDetail

Sample Query:

```js
query pokemon($name: String!) {
  pokemon(name: $name) {
    id
    name
    abilities {
      ability {
        name
      }
    }
    moves {
      move {
        name
      }
    }
    message
    status
  }
}
```

Sample Variables:

```json
{
  "name": "ditto"
}
```

Sample Result:

```json
{
  "data": {
    "pokemon": {
      "id": 132,
      "name": "ditto",
      "abilities": [
        {
          "ability": {
            "name": "imposter"
          }
        },
        {
          "ability": {
            "name": "limber"
          }
        }
      ],
      "moves": [
        {
          "move": {
            "name": "transform"
          }
        }
      ],
      "message": "",
      "status": true
    }
  }
}
```


## Credits

- [PokeAPI](https://github.com/PokeAPI/pokeapi)
- [Pokedex Promise V2](https://github.com/PokeAPI/pokedex-promise-v2#pokemon)
- [Heroku](https://heroku.com/)

----

Copyright © By Irfan Maulana
