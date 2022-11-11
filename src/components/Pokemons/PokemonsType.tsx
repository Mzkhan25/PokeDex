import React, { Key } from 'react'
import { PokemonType } from '../../store/types/pokemon'

interface Props {
    pokemonsType: [PokemonType]
}

export default function PokemonsType(props: Props) {
    const { pokemonsType } = props

    return (
        <>
            <div className="d-flex flex-row  flex-wrap">
                {pokemonsType.map((pokemonType: PokemonType, index: Key) => {
                    return (
                        <span
                            className="badge rounded-pill bg-dark me-2"
                            key={index}
                        >
                            {pokemonType.name}
                        </span>
                    )
                })}
            </div>
        </>
    )
}
