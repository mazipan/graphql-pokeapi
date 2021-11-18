import BaseList from './baseList';
import BaseResponse from './baseResponse';
import BaseName from './baseName';
import Ability from './pokemon/ability';
import GameIndex from './pokemon/gameIndex';
import VersionDetail from './pokemon/versionDetail';
import HeldItem from './pokemon/heldItem';
import VersionGroupDetail from './pokemon/versionGroupDetail';
import Move from './pokemon/move';
import Sprite from './pokemon/sprite';
import Stat from './pokemon/stat';
import Type from './pokemon/type';
import Pokemon from './pokemon/pokemon';
import PokemonItem from './pokemonItem';
import PokemonList from './pokemonList';

import queries from './queries';

const typeDefs = `
scalar JSON
scalar JSONObject
${BaseResponse.typeDef}
${BaseList.typeDef}
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

export default typeDefs;
