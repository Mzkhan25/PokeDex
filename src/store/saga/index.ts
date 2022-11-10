import {fork} from 'redux-saga/effects'
import { pokemonsSaga } from './Pokemons.saga'

export function* sagas() {
  yield fork(pokemonsSaga)
}