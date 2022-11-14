import React from 'react'
import { Card } from 'react-bootstrap'
import { IPokemon } from '../../store/types/models'
import PokemonsType from './PokemonsType'

interface Props {
    pokemon: IPokemon
    selected: boolean
    favoriteClicked?: (pokemon: IPokemon, isSelected: boolean) => void
}

export default function Pokemons(props: Props) {
    const { pokemon, selected, favoriteClicked } = props

    return (
        <>
            <Card className="me-4 mb-4" style={{ width: '20%' }}>
                <Card.Img variant="top" src={pokemon?.sprites?.front_default} />
                {favoriteClicked && (
                    <Card.ImgOverlay>
                        <i
                            className={
                                'fa pull-right ' +
                                (selected ? 'fa-heart' : 'fa-heart-o')
                            }
                            onClick={() => {
                                favoriteClicked(pokemon, selected)
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
