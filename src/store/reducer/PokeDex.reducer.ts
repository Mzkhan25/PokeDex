import { IPokeDexState } from '../types/models'
import { PokemonActionTypes } from '../actions/PokeDex.action'

const initialState: IPokeDexState = {
    loading: true,
    pokemons: null,
}

export const pokeDexReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case PokemonActionTypes.POKEMONS_GET_ALL_SUCCESS:
            state = { ...state, pokemons: action.payload, loading: false }
            console.log('state', state)
            return state

        default:
            return state
    }
}
