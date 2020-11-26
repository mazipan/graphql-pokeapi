import { ApolloServer } from '@saeris/apollo-server-vercel';
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';

import BaseList from '../typeDefs/baseList';
import BaseResponse from '../typeDefs/baseResponse';
import BaseName from '../typeDefs/baseName';
import ListResponse from '../typeDefs/listResponse';
import Ability from '../typeDefs/pokemon/ability';
import GameIndex from '../typeDefs/pokemon/gameIndex';
import VersionDetail from '../typeDefs/pokemon/versionDetail';
import HeldItem from '../typeDefs/pokemon/heldItem';
import VersionGroupDetail from '../typeDefs/pokemon/versionGroupDetail';
import Move from '../typeDefs/pokemon/move';
import Sprite from '../typeDefs/pokemon/sprite';
import Stat from '../typeDefs/pokemon/stat';
import Type from '../typeDefs/pokemon/type';
import Pokemon from '../typeDefs/pokemon/pokemon';
import PokemonItem from '../typeDefs/pokemonItem';
import PokemonList from '../typeDefs/pokemonList';

import queries from '../queries';

import abilityResolver from '../resolvers/ability';
import abilitiesResolver from '../resolvers/abilities';
import berriesResolver from '../resolvers/berries';
import berryResolver from '../resolvers/berry';
import eggGroupResolver from '../resolvers/eggGroup';
import eggGroupsResolver from '../resolvers/eggGroups';
import encounterMethodResolver from '../resolvers/encounterMethod';
import encounterMethodsResolver from '../resolvers/encounterMethods';
import evolutionChainsResolver from '../resolvers/evolutionChains';
import evolutionChainResolver from '../resolvers/evolutionChain';
import evolutionTriggersResolver from '../resolvers/evolutionTriggers';
import evolutionTriggerResolver from '../resolvers/evolutionTrigger';
import genderResolver from '../resolvers/gender';
import gendersResolver from '../resolvers/genders';
import growthRateResolver from '../resolvers/growthRate';
import growthRatesResolver from '../resolvers/growthRates';
import locationResolver from '../resolvers/location';
import locationsResolver from '../resolvers/locations';
import moveResolver from '../resolvers/move';
import movesResolver from '../resolvers/moves';
import natureResolver from '../resolvers/nature';
import naturesResolver from '../resolvers/natures';
import pokemonsResolver from '../resolvers/pokemons';
import pokemonResolver from '../resolvers/pokemon';
import regionResolver from '../resolvers/region';
import regionsResolver from '../resolvers/regions';
import speciesResolver from '../resolvers/species';
import typesResolver from '../resolvers/types';

// Construct a schema, using GraphQL schema language
const typeDefs = `
scalar JSON
scalar JSONObject
${BaseResponse.typeDef}
${BaseList.typeDef}
${ListResponse.typeDef}
${Ability.typeDef}
${GameIndex.typeDef}
${VersionDetail.typeDef}
${HeldItem.typeDef}
${VersionGroupDetail.typeDef}
${Move.typeDef}
${Sprite.typeDef}
${Stat.typeDef}
${Type.typeDef}
${BaseName.typeDef}
${Pokemon.typeDef}
${PokemonItem.typeDef}
${PokemonList.typeDef}
${queries.typeDef}
`;

// Provide resolver functions for your schema fields
const resolvers = {
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
  Query: {
    abilities: abilitiesResolver,
    ability: abilityResolver,
    berries: berriesResolver,
    berry: berryResolver,
    eggGroups: eggGroupsResolver,
    eggGroup: eggGroupResolver,
    encounterMethod: encounterMethodResolver,
    encounterMethods: encounterMethodsResolver,
    evolutionChains: evolutionChainsResolver,
    evolutionChain: evolutionChainResolver,
    evolutionTriggers: evolutionTriggersResolver,
    evolutionTrigger: evolutionTriggerResolver,
    genders: gendersResolver,
    gender: genderResolver,
    growthRates: growthRatesResolver,
    growthRate: growthRateResolver,
    location: locationResolver,
    locations: locationsResolver,
    moves: movesResolver,
    move: moveResolver,
    natures: naturesResolver,
    nature: natureResolver,
    pokemons: pokemonsResolver,
    pokemon: pokemonResolver,
    region: regionResolver,
    regions: regionsResolver,
    species: speciesResolver,
    types: typesResolver,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

export default server.createHandler();
