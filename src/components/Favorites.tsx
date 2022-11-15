import React from 'react'
import { connect } from 'react-redux'
import { addFavorite } from '../store/actions/PokeDex.action'
import { IPokemon, GlobalState } from '../store/types/models'
import PokemonsContainer from './Pokemons/PokemonsContainer'

interface Props {
    favoritePokemons: IPokemon[] | null
}

const Favorites = (props: Props) => {
    const { favoritePokemons } = props
    console.log(favoritePokemons)
    if (!favoritePokemons?.length) {
        return (
            <div className="d-flex mt-5 container">
                You do not have any Favorite pokemon. You can add them by
                clicking on heart on pokemon.
            </div>
        )
    }
    return (
        <>
            <h3 className="m-3 text-center">Your favorite pokemons:</h3>
            <PokemonsContainer pokemons={favoritePokemons} />
        </>
    )
}

const mapStateToProps = (state: GlobalState) => {
    return { favoritePokemons: state?.pokemonState?.favoritePokemons }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addFavorite: (pokemon: IPokemon) => {
            dispatch(addFavorite(pokemon))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
