export enum ISort {
    SORT_BY_NAME_ASC = 'Sort by name ascending',
    SORT_BY_NAME_DESC = 'Sort by name descending',
    SORT_BY_TYPE_ASC = 'Sort by type ascending',
    SORT_BY_TYPE_DESC = 'Sort by type descending',
}

export enum IPokemonType {
    BUG = 'Bug',
    DRAGON = 'Dragon',
    FAIRY = 'Fairy',
    FIRE = 'Fire',
    GHOST = 'Ghost',
    GROUND = 'Ground',
    NORMAL = 'Normal',
    PSYCHIC = 'Psychic',
    STEEL = 'Steel',
    DARK = 'Dark',
    ELECTRIC = 'Electric',
    FIGHTING = 'Fighting',
    FLYING = 'Flying',
    GRASS = 'Grass',
    ICE = 'Ice',
    POISON = 'Poison',
    ROCK = 'Rock',
    WATER = 'Water',
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
