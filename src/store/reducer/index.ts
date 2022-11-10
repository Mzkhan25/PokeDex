import { combineReducers } from 'redux'
import PokemonReducer from './Pokemons.reducer'

const rootReducer = combineReducers({
    pokemons: PokemonReducer,
})

export default rootReducer
