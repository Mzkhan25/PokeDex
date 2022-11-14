import { IPokemon } from './../types/models'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { PokemonActionTypes } from '../actions/PokeDex.action'
import { getPaginatePokemons } from '../../service/PokemonService'
import * as actions from '../actions/PokeDex.action'

function* getPaginatedSaga(action: any) {
    try {
        const tasks: IPokemon[] = yield call(
            getPaginatePokemons,
            action.payload
        )
        yield put(actions.getPaginatedSuccess(tasks))
    } catch (e) {
        yield put(actions.getPaginatedFail())
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

        yield put(actions.addFavoriteSuccess(favoritePokemons))
    } catch (e) {
        yield put(actions.addFavoriteFail())
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
        yield put(actions.getFavoriteFail())
    }
}

function* removeFavoriteSaga(action: any) {
    try {
        let favoritePokemons: IPokemon[] = []

        const existingFavoritePokemons =
            localStorage.getItem('favoritePokemons')
        if (existingFavoritePokemons != null) {
            favoritePokemons = JSON.parse(existingFavoritePokemons)
            favoritePokemons = favoritePokemons.filter(
                (pokemon) => pokemon.id !== action.payload
            )
            localStorage.setItem(
                'favoritePokemons',
                JSON.stringify(favoritePokemons)
            )

            yield put(actions.removeFavoriteSuccess(favoritePokemons))
        }
    } catch (e) {
        yield put(actions.removeFavoriteFail())
    }
}

export function* pokemonsSaga() {
    yield all([
        takeLatest(PokemonActionTypes.POKEMONS_GET_PAGINATED, getPaginatedSaga),
        takeLatest(PokemonActionTypes.POKEMONS_ADD_FAVORITE, addFavoritesSaga),
        takeLatest(PokemonActionTypes.POKEMONS_GET_FAVORITE, getFavoriteSaga),
        takeLatest(
            PokemonActionTypes.POKEMONS_REMOVE_FAVORITE,
            removeFavoriteSaga
        ),
        takeLatest(
            PokemonActionTypes.POKEMONS_REMOVE_FAVORITE_SUCCESS,
            getFavoriteSaga
        ),
    ])
}
