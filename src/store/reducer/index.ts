import { combineReducers } from 'redux'
import { pokeDexReducer } from './PokeDex.reducer'

const rootReducer = combineReducers({
    pokemonState: pokeDexReducer,
})

export default rootReducer
