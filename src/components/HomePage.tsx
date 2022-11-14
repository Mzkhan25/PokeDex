import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { connect } from 'react-redux'
import {
    addFavorite,
    removeFavorite,
    updateSort,
} from '../store/actions/PokeDex.action'
import { IPokemon, GlobalState, ISort } from '../store/types/models'
import { filteredResult } from '../utils/filters.util'
import PokemonsContainer from './Pokemons/PokemonsContainer'

interface Props {
    pokemons: IPokemon[] | null
    searchTerm?: string
    sort?: ISort
    favoritePokemons: IPokemon[] | null
    addFavorite: (pokemon: IPokemon) => void
    removeFavorite: (id: number) => void
    updateSort: (filter: ISort) => void
}

const HomePage = (props: Props) => {
    const {
        pokemons,
        searchTerm,
        sort,
        favoritePokemons,
        addFavorite,
        removeFavorite,
        updateSort,
    } = props
    const favPokemonsIds = favoritePokemons?.map((pokemon) => pokemon.id)
    if (!pokemons) {
        return <>loading</>
    }

    const favoriteClicked = (pokemon: IPokemon, isSelected: boolean) => {
        isSelected ? removeFavorite(pokemon.id) : addFavorite(pokemon)
    }

    const pokemonsList = filteredResult(pokemons, searchTerm, sort)

    return (
        <>
            <DropdownButton
                title="Sort"
                className="container d-flex dropdown my-4"
            >
                <Dropdown.Item
                    onClick={() => {
                        updateSort(ISort.SORT_BY_NAME_ASC)
                    }}
                >
                    Sort by Ascending names
                </Dropdown.Item>
                <Dropdown.Item
                    as="button"
                    onClick={() => {
                        updateSort(ISort.SORT_BY_NAME_DESC)
                    }}
                >
                    Sort by Descending names
                </Dropdown.Item>
                <Dropdown.Item
                    as="button"
                    onClick={() => {
                        updateSort(ISort.SORT_BY_TYPE_ASC)
                    }}
                >
                    Sort by Ascending Types
                </Dropdown.Item>
                <Dropdown.Item
                    as="button"
                    onClick={() => {
                        updateSort(ISort.SORT_BY_TYPE_DESC)
                    }}
                >
                    Sort by Ascending Desc
                </Dropdown.Item>
            </DropdownButton>
            <PokemonsContainer
                favPokemonsIds={favPokemonsIds}
                favoriteClicked={favoriteClicked}
                pokemons={pokemonsList}
            />
        </>
    )
}

const mapStateToProps = (state: GlobalState) => {
    return {
        pokemons: state?.pokemonState?.pokemons,
        searchTerm: state?.pokemonState?.searchTerm,
        sort: state?.pokemonState?.sort,
        favoritePokemons: state?.pokemonState?.favoritePokemons,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addFavorite: (pokemon: IPokemon) => {
            dispatch(addFavorite(pokemon))
        },
        removeFavorite: (id: number) => {
            dispatch(removeFavorite(id))
        },
        updateSort: (sort: ISort) => {
            dispatch(updateSort(sort))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
