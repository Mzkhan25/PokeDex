import { IPokeDexState } from './../types/models'
import { stat } from 'fs'
import { IPokemon } from '../types/models'
import { all, call, put, select, takeLatest } from 'redux-saga/effects'
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

export const username = (state: any) => state.pokemonState.favoritePokemons

function* addFavoritesSaga(payload: any) {
    try {
        const sd: IPokemon = yield select(username)
        localStorage.setItem('fav', payload)

        console.log('favasad', payload, sd)
    } catch (e) {
        console.log(e)
    }
}

export function* pokemonsSaga() {
    yield all([
        takeLatest(PokemonActionTypes.POKEMONS_GET_ALL, loadTasks),
        takeLatest(PokemonActionTypes.POKEMONS_ADD_FAVORITE, addFavoritesSaga),
    ])
}
