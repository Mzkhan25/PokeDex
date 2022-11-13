import { GlobalState, IPokeDexState } from './../types/models'
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

function* addFavoritesSaga(action: any) {
    try {
        let favoritePokemons = []

        const existingFavoritePokemons =
            localStorage.getItem('favoritePokemons')
        if (existingFavoritePokemons != null) {
            favoritePokemons = JSON.parse(existingFavoritePokemons)
        }

        favoritePokemons.push(action.payload)

        localStorage.setItem(
            'favoritePokemons',
            JSON.stringify(favoritePokemons)
        )

        yield put(actions.addFavoriteSuccess(action.payload))
    } catch (e) {
        console.log(e)
    }
}
function* getFavoriteSaga() {
    try {
        let favoritePokemons = []

        const existingFavoritePokemons =
            localStorage.getItem('favoritePokemons')
        if (existingFavoritePokemons != null) {
            favoritePokemons = JSON.parse(existingFavoritePokemons)
        }

        yield put(actions.getFavoriteSuccess(favoritePokemons))
    } catch (e) {
        console.log(e)
    }
}

export function* pokemonsSaga() {
    yield all([
        takeLatest(PokemonActionTypes.POKEMONS_GET_ALL, loadTasks),
        takeLatest(PokemonActionTypes.POKEMONS_ADD_FAVORITE, addFavoritesSaga),
        takeLatest(PokemonActionTypes.POKEMONS_GET_FAVORITE, getFavoriteSaga),
    ])
}
