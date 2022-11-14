import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addFavorite, updateSort } from '../store/actions/PokeDex.action'
import { IPokemon, GlobalState, ISort } from '../store/types/models'
import { filteredResult } from '../utils/filters.util'
import PokemonsContainer from './Pokemons/PokemonsContainer'

interface Props {
    paginatedPokemons: IPokemon[] | null
    searchTerm?: string
    sort?: ISort
    addFavorite: (pokemon: IPokemon) => void
    updateSort: (filter: ISort) => void
}

const PaginatedResult = (props: Props) => {
    const { paginatedPokemons, searchTerm, sort, addFavorite, updateSort } =
        props

    if (!paginatedPokemons) {
        return <>loading</>
    }

    const pokemonsList = filteredResult(paginatedPokemons, searchTerm, sort)

    return (
        <>
            <div>
                <DropdownButton
                    title="Sort"
                    className="container d-flex dropdown justify-content-end my-4"
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
                    addFavorite={addFavorite}
                    pokemons={pokemonsList}
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
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addFavorite: (pokemon: IPokemon) => {
            dispatch(addFavorite(pokemon))
        },
        updateSort: (sort: ISort) => {
            dispatch(updateSort(sort))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginatedResult)
