import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { connect } from 'react-redux'
import {
    addFavorite,
    getPaginated,
    removeFavorite,
    updateSort,
} from '../store/actions/PokeDex.action'
import { IPokemon, GlobalState, ISort } from '../store/types/models'
import { filteredResult } from '../utils/filters.util'
import PokemonsContainer from './Pokemons/PokemonsContainer'
import { BottomScrollListener } from 'react-bottom-scroll-listener'

interface Props {
    paginatedPokemons: IPokemon[] | null
    searchTerm?: string
    sort?: ISort
    favoritePokemons: IPokemon[] | null
    removeFavorite: (id: number) => void
    addFavorite: (pokemon: IPokemon) => void
    updateSort: (filter: ISort) => void
    getPaginated: (limit: number) => void
}

const PaginatedResult = (props: Props) => {
    const {
        paginatedPokemons,
        searchTerm,
        sort,
        favoritePokemons,
        addFavorite,
        removeFavorite,
        updateSort,
        getPaginated,
    } = props

    if (!paginatedPokemons) {
        return <>loading</>
    }

    const favPokemonsIds = favoritePokemons?.map((pokemon) => pokemon.id)
    const favoriteClicked = (pokemon: IPokemon, isSelected: boolean) => {
        isSelected ? removeFavorite(pokemon.id) : addFavorite(pokemon)
    }
    const pokemonsList = filteredResult(paginatedPokemons, searchTerm, sort)

    return (
        <>
            <div>
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
                <BottomScrollListener
                    onBottom={() => {
                        getPaginated(pokemonsList.length + 25)
                    }}
                />
            </div>
        </>
    )
}

const mapStateToProps = (state: GlobalState) => {
    return {
        paginatedPokemons: state?.pokemonState?.paginatedPokemons,
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
        getPaginated: (limit: number) => {
            dispatch(getPaginated(limit))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginatedResult)
