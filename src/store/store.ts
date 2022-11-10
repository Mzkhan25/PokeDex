import { applyMiddleware, createStore } from 'redux'
import createSagaMiddlware from 'redux-saga'

import rootReducers from './reducer'
import { sagas } from './saga'

const sagaMiddleware = createSagaMiddlware()

const configureStore = () => {
    const store = createStore(rootReducers, applyMiddleware(sagaMiddleware))

    sagaMiddleware.run(sagas)
    return store
}

export default configureStore
