import { IPokemon } from './../types/models'
export enum PokemonActionTypes {
    POKEMONS_GET_ALL = '[POKEMONS] Get All',
    POKEMONS_GET_ALL_SUCCESS = '[POKEMONS] Get All Success',
    POKEMONS_GET_ALL_FAIL = '[POKEMONS] Get All Fail',
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

export type Actions =
    | IPokemonsGetAll
    | IPokemonsGetAllSuccess
    | IPokemonsGetAllFail

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
