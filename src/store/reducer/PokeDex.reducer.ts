import { IPokeDexState } from '../types/models'
import { PokemonActionTypes } from '../actions/PokeDex.action'

const initialState: IPokeDexState = {
    loading: true,
    pokemons: null,
    favoritePokemons: null,
    paginatedPokemons: null,
    searchTerm: '',
}

export const pokeDexReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case PokemonActionTypes.POKEMONS_GET_ALL_SUCCESS:
            state = { ...state, pokemons: action.payload, loading: false }
            return state
        case PokemonActionTypes.POKEMONS_GET_PAGINATED_SUCCESS:
            state = {
                ...state,
                paginatedPokemons: action.payload,
                loading: false,
            }
            return state
        case PokemonActionTypes.POKEMONS_ADD_FAVORITE_SUCCESS:
            state = { ...state, favoritePokemons: action.payload }
            return state
        case PokemonActionTypes.POKEMONS_GET_FAVORITE_SUCCESS:
            state = { ...state, favoritePokemons: action.payload }
            return state
        case PokemonActionTypes.POKEMONS_REMOVE_FAVORITE_SUCCESS:
            state.favoritePokemons = action.payload
            return state
        case PokemonActionTypes.POKEMONS_SEARCH_BY_NAME:
            state = { ...state, searchTerm: action.payload }
            return state
        case PokemonActionTypes.POKEMONS_UPDATE_SORT:
            state = { ...state, sort: action.payload }
            return state
        default:
            return state
    }
}
