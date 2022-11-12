import { IPokemon } from '../types/models'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { PokemonActionTypes } from '../actions/PokeDex.action'
import { getPokemons } from '../../service/PokemonService'
import * as actions from '../actions/PokeDex.action'

function* loadTasks() {
    try {
        const tasks: [IPokemon] = yield call(getPokemons)
        yield put(actions.getAllSuccess(tasks))
    } catch (e) {
        console.log(e)
    }
}

export function* pokemonsSaga() {
    yield all([takeLatest(PokemonActionTypes.POKEMONS_GET_ALL, loadTasks)])
}
