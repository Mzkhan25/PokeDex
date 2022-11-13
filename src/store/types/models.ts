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

export interface IPokeDexState {
    loading: boolean
    pokemons: [IPokemon] | null
    favoritePokemons: [IPokemon] | null
    searchTerm: string
}

export interface GlobalState {
    pokemonState: IPokeDexState
}
