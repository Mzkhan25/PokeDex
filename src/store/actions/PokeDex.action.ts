import { IPokemon } from './../types/models'
export enum PokemonActionTypes {
    POKEMONS_GET_ALL = '[POKEMONS] Get All',
    POKEMONS_GET_ALL_SUCCESS = '[POKEMONS] Get All Success',
    POKEMONS_GET_ALL_FAIL = '[POKEMONS] Get All Fail',
    POKEMONS_ADD_FAVORITE = '[POKEMONS] Add Favorite',
    POKEMONS_ADD_FAVORITE_SUCCESS = '[POKEMONS] Add Favorite Success',
    POKEMONS_ADD_FAVORITE_FAIL = '[POKEMONS] Add Favorite Fail',
}

interface IPokemonsGetAll {
    readonly type: PokemonActionTypes.POKEMONS_GET_ALL
}
interface IPokemonsGetAllSuccess {
    readonly type: PokemonActionTypes.POKEMONS_GET_ALL_SUCCESS
    payload: [IPokemon]
}

interface IPokemonsGetAllFail {
    readonly type: PokemonActionTypes.POKEMONS_GET_ALL_FAIL
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

export type Actions =
    | IPokemonsGetAll
    | IPokemonsGetAllSuccess
    | IPokemonsGetAllFail
    | IPokemonAddFavorite
    | IPokemonAddFavoriteSuccess
    | IPokemonAddFavoriteFail

export function getAll(): IPokemonsGetAll {
    return {
        type: PokemonActionTypes.POKEMONS_GET_ALL,
    }
}

export function getAllSuccess(pokemons: [IPokemon]): IPokemonsGetAllSuccess {
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
