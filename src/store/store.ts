import { getPokemons } from './../service/PokemonService'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddlware from 'redux-saga'

import rootReducers from './reducer'
import { sagas } from './saga'
import { getAll } from './actions/PokeDex.action'

const sagaMiddleware = createSagaMiddlware()

const configureStore = () => {
    const store = createStore(rootReducers, applyMiddleware(sagaMiddleware))

    sagaMiddleware.run(sagas)
    store.dispatch(getAll())

    return store
}

export default configureStore
