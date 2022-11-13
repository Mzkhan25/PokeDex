import React, { Key } from 'react'
import { IPokemon } from '../../store/types/models'
import Pokemons from './Pokemons'

interface Props {
    pokemons: IPokemon[]
    addFavorite?: (pokemon: IPokemon) => void
}

export default function PokemonsContainer(props: Props) {
    const { pokemons, addFavorite } = props

    return (
        <>
            <div className="container d-flex flex-row bd-highlight flex-wrap">
                {pokemons.map((pokemon: IPokemon, index: Key) => {
                    return (
                        <Pokemons
                            pokemon={pokemon}
                            key={index}
                            addFavorite={addFavorite}
                        />
                    )
                })}
            </div>
        </>
    )
}
