import { applyMiddleware, createStore } from 'redux'
import createSagaMiddlware from 'redux-saga'

import rootReducers from './reducer'
import { sagas } from './saga'
import { getAll, getFavorite } from './actions/PokeDex.action'

const sagaMiddleware = createSagaMiddlware()

const configureStore = () => {
    const store = createStore(rootReducers, applyMiddleware(sagaMiddleware))

    sagaMiddleware.run(sagas)
    store.dispatch(getAll())
    store.dispatch(getFavorite())

    return store
}

export default configureStore
