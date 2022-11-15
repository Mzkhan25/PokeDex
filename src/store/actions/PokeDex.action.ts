import { ISort, IPokemon, IPaginatedFilter } from './../types/models'
export enum PokemonActionTypes {
    POKEMONS_GET_PAGINATED = '[POKEMONS] Get Paginated',
    POKEMONS_GET_PAGINATED_SUCCESS = '[POKEMONS] Get Paginated Success',
    POKEMONS_GET_PAGINATED_FAIL = '[POKEMONS] Get Paginated Fail',
    POKEMONS_ADD_FAVORITE = '[POKEMONS] Add Favorite',
    POKEMONS_ADD_FAVORITE_SUCCESS = '[POKEMONS] Add Favorite Success',
    POKEMONS_ADD_FAVORITE_FAIL = '[POKEMONS] Add Favorite Fail',
    POKEMONS_GET_FAVORITE = '[POKEMONS] Get Favorite',
    POKEMONS_GET_FAVORITE_SUCCESS = '[POKEMONS] Get Favorite Success',
    POKEMONS_GET_FAVORITE_FAIL = '[POKEMONS] Get Favorite Fail',
    POKEMONS_REMOVE_FAVORITE = '[POKEMONS] Remove Favorite',
    POKEMONS_REMOVE_FAVORITE_SUCCESS = '[POKEMONS] Remove Favorite Success',
    POKEMONS_REMOVE_FAVORITE_FAIL = '[POKEMONS] Remove Favorite Fail',
    POKEMONS_SEARCH_BY_NAME = '[POKEMONS] Search by name',
    POKEMONS_UPDATE_SORT = '[POKEMONS] Update Sort',
}

interface IPokemonsGetPaginated {
    readonly type: PokemonActionTypes.POKEMONS_GET_PAGINATED
    payload: IPaginatedFilter
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

interface IPokemonRemoveFavorite {
    readonly type: PokemonActionTypes.POKEMONS_REMOVE_FAVORITE
    payload: number
}
interface IPokemonRemoveFavoriteSuccess {
    readonly type: PokemonActionTypes.POKEMONS_REMOVE_FAVORITE_SUCCESS
    payload: IPokemon[]
}

interface IPokemonRemoveFavoriteFail {
    readonly type: PokemonActionTypes.POKEMONS_REMOVE_FAVORITE_FAIL
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
    | IPokemonRemoveFavorite
    | IPokemonRemoveFavoriteSuccess
    | IPokemonRemoveFavoriteFail

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

export function getPaginated(
    paginatedFilter: IPaginatedFilter
): IPokemonsGetPaginated {
    return {
        type: PokemonActionTypes.POKEMONS_GET_PAGINATED,
        payload: paginatedFilter,
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

export function removeFavorite(id: number): IPokemonRemoveFavorite {
    return {
        type: PokemonActionTypes.POKEMONS_REMOVE_FAVORITE,
        payload: id,
    }
}
export function removeFavoriteSuccess(
    pokemon: IPokemon[]
): IPokemonRemoveFavoriteSuccess {
    return {
        type: PokemonActionTypes.POKEMONS_REMOVE_FAVORITE_SUCCESS,
        payload: pokemon,
    }
}

export function removeFavoriteFail(): IPokemonRemoveFavoriteFail {
    return {
        type: PokemonActionTypes.POKEMONS_REMOVE_FAVORITE_FAIL,
    }
}
