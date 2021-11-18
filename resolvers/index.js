import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';

import abilityResolver from './ability';
import abilitiesResolver from './abilities';
import berriesResolver from './berries';
import berryResolver from './berry';
import eggGroupResolver from './eggGroup';
import eggGroupsResolver from './eggGroups';
import encounterMethodResolver from './encounterMethod';
import encounterMethodsResolver from './encounterMethods';
import evolutionChainsResolver from './evolutionChains';
import evolutionChainResolver from './evolutionChain';
import evolutionTriggersResolver from './evolutionTriggers';
import evolutionTriggerResolver from './evolutionTrigger';
import genderResolver from './gender';
import gendersResolver from './genders';
import growthRateResolver from './growthRate';
import growthRatesResolver from './growthRates';
import locationResolver from './location';
import locationsResolver from './locations';
import moveResolver from './move';
import movesResolver from './moves';
import natureResolver from './nature';
import naturesResolver from './natures';
import pokemonsResolver from './pokemons';
import pokemonResolver from './pokemon';
import regionResolver from './region';
import regionsResolver from './regions';
import speciesResolver from './species';
import typesResolver from './types';

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

export default resolvers;
