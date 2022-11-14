import { ISort, IPokemon } from './../types/models'
export enum PokemonActionTypes {
    POKEMONS_GET_ALL = '[POKEMONS] Get All',
    POKEMONS_GET_ALL_SUCCESS = '[POKEMONS] Get All Success',
    POKEMONS_GET_ALL_FAIL = '[POKEMONS] Get All Fail',
    POKEMONS_GET_PAGINATED = '[POKEMONS] Get Paginated',
    POKEMONS_GET_PAGINATED_SUCCESS = '[POKEMONS] Get Paginated Success',
    POKEMONS_GET_PAGINATED_FAIL = '[POKEMONS] Get Paginated Fail',
    POKEMONS_ADD_FAVORITE = '[POKEMONS] Add Favorite',
    POKEMONS_ADD_FAVORITE_SUCCESS = '[POKEMONS] Add Favorite Success',
    POKEMONS_ADD_FAVORITE_FAIL = '[POKEMONS] Add Favorite Fail',
    POKEMONS_GET_FAVORITE = '[POKEMONS] Get Favorite',
    POKEMONS_GET_FAVORITE_SUCCESS = '[POKEMONS] Get Favorite Success',
    POKEMONS_GET_FAVORITE_FAIL = '[POKEMONS] Get Favorite Fail',
    POKEMONS_SEARCH_BY_NAME = '[POKEMONS] Search by name',
    POKEMONS_UPDATE_SORT = '[POKEMONS] Update Sort',
}

interface IPokemonsGetAll {
    readonly type: PokemonActionTypes.POKEMONS_GET_ALL
}
interface IPokemonsGetAllSuccess {
    readonly type: PokemonActionTypes.POKEMONS_GET_ALL_SUCCESS
    payload: IPokemon[]
}

interface IPokemonsGetAllFail {
    readonly type: PokemonActionTypes.POKEMONS_GET_ALL_FAIL
}
interface IPokemonsGetPaginated {
    readonly type: PokemonActionTypes.POKEMONS_GET_PAGINATED
}
interface IPokemonsGetPaginatedSuccess {
    readonly type: PokemonActionTypes.POKEMONS_GET_PAGINATED_SUCCESS

    payload: IPokemon[]
}

interface IPokemonsGetPaginatedFail {
    readonly type: PokemonActionTypes.POKEMONS_GET_PAGINATED_FAIL
}

interface IPokemonAddFavorite {
    readonly type: PokemonActionTypes.POKEMONS_ADD_FAVORITE
    payload: IPokemon
}
interface IPokemonAddFavoriteSuccess {
    readonly type: PokemonActionTypes.POKEMONS_ADD_FAVORITE_SUCCESS
    payload: IPokemon
}

interface IPokemonAddFavoriteFail {
    readonly type: PokemonActionTypes.POKEMONS_ADD_FAVORITE_FAIL
}

interface IPokemonsGetFavorite {
    readonly type: PokemonActionTypes.POKEMONS_GET_FAVORITE
}
interface IPokemonGetFavoriteSuccess {
    readonly type: PokemonActionTypes.POKEMONS_GET_FAVORITE_SUCCESS
    payload: IPokemon[]
}

interface IPokemonGetFavoriteFail {
    readonly type: PokemonActionTypes.POKEMONS_GET_FAVORITE_FAIL
}

interface IPokemonSearchByName {
    readonly type: PokemonActionTypes.POKEMONS_SEARCH_BY_NAME
    payload: string
}

interface IPokemonUpdateSort {
    readonly type: PokemonActionTypes.POKEMONS_UPDATE_SORT
    payload: ISort
}

export type Actions =
    | IPokemonsGetAll
    | IPokemonsGetAllSuccess
    | IPokemonsGetAllFail
    | IPokemonAddFavorite
    | IPokemonAddFavoriteSuccess
    | IPokemonAddFavoriteFail
    | IPokemonsGetFavorite
    | IPokemonGetFavoriteSuccess
    | IPokemonGetFavoriteFail
    | IPokemonSearchByName
    | IPokemonUpdateSort
    | IPokemonsGetPaginated
    | IPokemonsGetPaginatedSuccess
    | IPokemonsGetPaginatedFail

export function getAll(): IPokemonsGetAll {
    return {
        type: PokemonActionTypes.POKEMONS_GET_ALL,
    }
}

export function getAllSuccess(pokemons: IPokemon[]): IPokemonsGetAllSuccess {
    return {
        type: PokemonActionTypes.POKEMONS_GET_ALL_SUCCESS,
        payload: pokemons,
    }
}

export function getAllFail(): IPokemonsGetAllFail {
    return {
        type: PokemonActionTypes.POKEMONS_GET_ALL_FAIL,
    }
}

export function addFavorite(pokemon: IPokemon): IPokemonAddFavorite {
    return {
        type: PokemonActionTypes.POKEMONS_ADD_FAVORITE,
        payload: pokemon,
    }
}
export function addFavoriteSuccess(
    pokemon: IPokemon
): IPokemonAddFavoriteSuccess {
    return {
        type: PokemonActionTypes.POKEMONS_ADD_FAVORITE_SUCCESS,
        payload: pokemon,
    }
}

export function addFavoriteFail(): IPokemonAddFavoriteFail {
    return {
        type: PokemonActionTypes.POKEMONS_ADD_FAVORITE_FAIL,
    }
}
export function getFavorite(): IPokemonsGetFavorite {
    return {
        type: PokemonActionTypes.POKEMONS_GET_FAVORITE,
    }
}
export function getFavoriteSuccess(
    pokemon: IPokemon[]
): IPokemonGetFavoriteSuccess {
    return {
        type: PokemonActionTypes.POKEMONS_GET_FAVORITE_SUCCESS,
        payload: pokemon,
    }
}

export function getFavoriteFail(): IPokemonGetFavoriteFail {
    return {
        type: PokemonActionTypes.POKEMONS_GET_FAVORITE_FAIL,
    }
}

export function searchByName(name: string): IPokemonSearchByName {
    return {
        type: PokemonActionTypes.POKEMONS_SEARCH_BY_NAME,
        payload: name,
    }
}

export function updateSort(sort: ISort): IPokemonUpdateSort {
    return {
        type: PokemonActionTypes.POKEMONS_UPDATE_SORT,
        payload: sort,
    }
}

export function getPaginated(): IPokemonsGetPaginated {
    return {
        type: PokemonActionTypes.POKEMONS_GET_PAGINATED,
    }
}

export function getPaginatedSuccess(
    pokemons: IPokemon[]
): IPokemonsGetPaginatedSuccess {
    return {
        type: PokemonActionTypes.POKEMONS_GET_PAGINATED_SUCCESS,
        payload: pokemons,
    }
}

export function getPaginatedFail(): IPokemonsGetPaginatedFail {
    return {
        type: PokemonActionTypes.POKEMONS_GET_PAGINATED_FAIL,
    }
}
