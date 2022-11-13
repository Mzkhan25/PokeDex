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
    if (favoritePokemons) {
        return (
            <>
                <PokemonsContainer pokemons={favoritePokemons} />
            </>
        )
    }

    return <>loading</>
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
