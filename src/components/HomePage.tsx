import React from 'react'
import { connect } from 'react-redux'
import { IPokeDexState, IPokemon } from '../store/types/models'
import PokemonsContainer from './Pokemons/PokemonsContainer'

const HomePage = (props: any) => {
    const { state } = props

    console.log('pokemons', state)
    if (state.pokemons) {
        return (
            <>
                <PokemonsContainer pokemons={state.pokemons} />
            </>
        )
    }

    return <>loading</>
}

const mapStateToProps = (state: IPokeDexState) => {
    return { state: state.pokemons }
}

const mapDispatchToProps = () => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
