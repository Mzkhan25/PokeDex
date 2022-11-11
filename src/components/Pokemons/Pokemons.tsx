import React from 'react'
import { Card } from 'react-bootstrap'
import { IPokemon } from '../../store/types/pokemon'
import PokemonsType from './PokemonsType'

interface Props {
    pokemon: IPokemon
}

export default function Pokemons(props: Props) {
    const { pokemon } = props

    return (
        <>
            <Card className="w-25 my-2">
                <Card.Img variant="top" src={pokemon?.sprites?.front_default} />
                <Card.Body>
                    <Card.Title className="text-capitalize">
                        {pokemon?.name}
                    </Card.Title>
                    <Card.Text>
                        <PokemonsType pokemonsType={pokemon.types} />
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
