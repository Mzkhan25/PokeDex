import { IPokeDexState } from '../types/models'
import { PokemonActionTypes } from '../actions/PokeDex.action'

const initialState: IPokeDexState = {
    loading: true,
    pokemons: null,
    favoritePokemons: null,
}

export const pokeDexReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case PokemonActionTypes.POKEMONS_GET_ALL_SUCCESS:
            state = { ...state, pokemons: action.payload, loading: false }
            console.log(state)
            return state

        case PokemonActionTypes.POKEMONS_ADD_FAVORITE_SUCCESS:
            state = { ...state, favoritePokemons: action.payload }
            return state
        default:
            return state
    }
}
