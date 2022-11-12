import React from 'react'
import { connect } from 'react-redux'
import { addFavorite } from '../store/actions/PokeDex.action'
import { IPokemon, GlobalState } from '../store/types/models'
import PokemonsContainer from './Pokemons/PokemonsContainer'

interface Props {
    pokemons: [IPokemon] | null
    addFavorite: (pokemon: IPokemon) => void
}

const HomePage = (props: Props) => {
    const { pokemons, addFavorite } = props

    console.log('pokemons', pokemons)
    if (pokemons) {
        return (
            <>
                <PokemonsContainer
                    addFavorite={addFavorite}
                    pokemons={pokemons}
                />
            </>
        )
    }

    return <>loading</>
}

const mapStateToProps = (state: GlobalState) => {
    return { pokemons: state?.pokemonState?.pokemons }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addFavorite: (pokemon: IPokemon) => {
            dispatch(addFavorite(pokemon))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
