import React from 'react'
import { Card } from 'react-bootstrap'
import { IPokemon } from '../../store/types/models'
import PokemonsType from './PokemonsType'

interface Props {
    pokemon: IPokemon
    addFavorite?: (pokemon: IPokemon) => void
}

export default function Pokemons(props: Props) {
    const { pokemon, addFavorite } = props

    return (
        <>
            <Card className="me-4 mb-4" style={{ width: '20%' }}>
                <Card.Img variant="top" src={pokemon?.sprites?.front_default} />
                {addFavorite && (
                    <Card.ImgOverlay>
                        <i
                            className="fa fa-heart-o pull-right"
                            onClick={() => {
                                addFavorite(pokemon)
                            }}
                        />
                    </Card.ImgOverlay>
                )}

                <Card.Body>
                    <Card.Title className="text-capitalize">
                        {pokemon?.name}
                    </Card.Title>

                    <PokemonsType pokemonsType={pokemon.types} />
                </Card.Body>
            </Card>
        </>
    )
}
