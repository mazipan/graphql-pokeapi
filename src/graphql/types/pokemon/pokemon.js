export default {
  typeDef: `type Pokemon {
abilities: [Ability]
base_experience: Int
forms: [BaseName]
game_indices: [GameIndex]
height: Int
held_items: [HeldItem]
id: Int
is_default: Boolean
location_area_encounters: String
moves: [Move]
name: String
order: Int
species: BaseName
sprites: Sprite
stats: [Stat]
types: [Type]
weight: Int
status: Boolean
message: String
}
`
}
