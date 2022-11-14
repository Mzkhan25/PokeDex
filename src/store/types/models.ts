export enum ISort {
    SORT_BY_NAME_ASC = 'Sort by name ascending',
    SORT_BY_NAME_DESC = 'Sort by name descending',
    SORT_BY_TYPE_ASC = 'Sort by type ascending',
    SORT_BY_TYPE_DESC = 'Sort by type descending',
}

export interface PokemonType {
    name: string
}

export interface Sprite {
    front_default: string
}

export interface IPaginatedFilter {
    limit?: number
    filter?: boolean
}

export interface IPokemon {
    id: number
    name: string
    types: PokemonType[]
    sprites: Sprite
}

export interface IPokeDexState {
    loading: boolean
    pokemons: IPokemon[] | null
    favoritePokemons: IPokemon[] | null
    searchTerm: string
    sort?: ISort
}

export interface GlobalState {
    pokemonState: IPokeDexState
}
