import React from 'react'
import { useGetPokemons } from '../hooks/useGetPokemons.hook'
import PokemonsContainer from './Pokemons/PokemonsContainer'

export default function HomePage() {
    const { data } = useGetPokemons()
    const pokemons = data?.allPokemon
    if (data) {
        return (
            <>
                <PokemonsContainer pokemons={pokemons} />
            </>
        )
    }

    return <>loading</>
}
