import React, { Key } from 'react'
import { Row } from 'react-bootstrap'
import { IPokemon } from '../../store/types/models'
import Pokemons from './Pokemons'

interface Props {
    pokemons: IPokemon[]
    favPokemonsIds?: number[]
    favoriteClicked?: (pokemon: IPokemon, isSelected: boolean) => void
}

export default function PokemonsContainer(props: Props) {
    const { pokemons, favPokemonsIds, favoriteClicked } = props

    return (
        <>
            <div className="container d-flex flex-row bd-highlight flex-wrap justify-content-start">
                <Row md={5} sm={3}>
                    {pokemons.map((pokemon: IPokemon, index: Key) => {
                        return (
                            <Pokemons
                                pokemon={pokemon}
                                key={index}
                                selected={
                                    !!favPokemonsIds?.includes(pokemon.id)
                                }
                                favoriteClicked={favoriteClicked}
                            />
                        )
                    })}
                </Row>
            </div>
        </>
    )
}
