import { applyMiddleware, createStore } from 'redux'
import createSagaMiddlware from 'redux-saga'

import rootReducers from './reducer'
import { sagas } from './saga'
import { getAll, getFavorite, getPaginated } from './actions/PokeDex.action'

const sagaMiddleware = createSagaMiddlware()

const configureStore = () => {
    const store = createStore(rootReducers, applyMiddleware(sagaMiddleware))

    sagaMiddleware.run(sagas)
    store.dispatch(getAll())
    store.dispatch(getFavorite())
    store.dispatch(getPaginated(25))

    return store
}

export default configureStore
