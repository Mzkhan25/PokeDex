import React, { Key } from 'react'
import { PokemonType } from '../../store/types/models'
import { typeColor } from '../../utils/typeColor.util'

interface Props {
    pokemonsType: PokemonType[]
}

export default function PokemonsType(props: Props) {
    const { pokemonsType } = props

    return (
        <>
            <div className="d-flex flex-row  flex-wrap">
                {pokemonsType.map((pokemonType: PokemonType, index: Key) => {
                    return (
                        <span
                            className={`badge rounded-pill me-2 ${typeColor(
                                pokemonType
                            )}`}
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
