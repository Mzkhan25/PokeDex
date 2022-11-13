import React from 'react'
import { connect } from 'react-redux'
import { addFavorite } from '../store/actions/PokeDex.action'
import { IPokemon, GlobalState } from '../store/types/models'
import PokemonsContainer from './Pokemons/PokemonsContainer'

interface Props {
    pokemons: IPokemon[] | null
    searchTerm?: string
    addFavorite: (pokemon: IPokemon) => void
}

const HomePage = (props: Props) => {
    const { pokemons, searchTerm, addFavorite } = props
    const pok = searchTerm
        ? pokemons?.filter((pokemon) => pokemon.name.includes(searchTerm)) || []
        : pokemons
    if (pok) {
        return (
            <>
                <PokemonsContainer addFavorite={addFavorite} pokemons={pok} />
            </>
        )
    }

    return <>loading</>
}

const mapStateToProps = (state: GlobalState) => {
    return {
        pokemons: state?.pokemonState?.pokemons,
        searchTerm: state?.pokemonState?.searchTerm,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addFavorite: (pokemon: IPokemon) => {
            dispatch(addFavorite(pokemon))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
