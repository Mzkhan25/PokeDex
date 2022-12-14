import { applyMiddleware, createStore } from 'redux'
import createSagaMiddlware from 'redux-saga'

import rootReducers from './reducer'
import { sagas } from './saga'
import { getFavorite, getPaginated } from './actions/PokeDex.action'

const sagaMiddleware = createSagaMiddlware()

const configureStore = () => {
    const store = createStore(rootReducers, applyMiddleware(sagaMiddleware))

    sagaMiddleware.run(sagas)
    store.dispatch(getFavorite())
    store.dispatch(getPaginated({ limit: 25, filter: false }))

    return store
}

export default configureStore
