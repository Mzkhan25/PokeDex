export interface PokemonType {
    name: string
}

export interface Sprite {
    front_default: string
}

export interface IPokemon {
    name: string
    types: [PokemonType]
    sprites: Sprite
}
