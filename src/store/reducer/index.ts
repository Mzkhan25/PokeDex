import { combineReducers } from 'redux'
import { pokeDexReducer } from './PokeDex.reducer'

const rootReducer = combineReducers({
    pokemons: pokeDexReducer,
})

export default rootReducer
