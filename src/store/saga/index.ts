import { fork } from 'redux-saga/effects'
import { pokemonsSaga } from './PokeDex.saga'

export function* sagas() {
    yield fork(pokemonsSaga)
}
