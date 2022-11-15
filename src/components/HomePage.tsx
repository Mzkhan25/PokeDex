import React, { useEffect, useState } from 'react'
import { Dropdown, DropdownButton, Row, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import {
    addFavorite,
    getPaginated,
    removeFavorite,
    updateSort,
} from '../store/actions/PokeDex.action'
import {
    IPokemon,
    GlobalState,
    ISort,
    IPaginatedFilter,
} from '../store/types/models'
import { filteredResult } from '../utils/filters.util'
import PokemonsContainer from './Pokemons/PokemonsContainer'
import { BottomScrollListener } from 'react-bottom-scroll-listener'

interface Props {
    pokemons: IPokemon[] | null
    searchTerm?: string
    sort?: ISort
    favoritePokemons: IPokemon[] | null
    removeFavorite: (id: number) => void
    addFavorite: (pokemon: IPokemon) => void
    updateSort: (filter: ISort) => void
    getPaginated: (paginatedFilter: IPaginatedFilter) => void
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
        getPaginated,
    } = props
    const [paginatedFilter, setPaginatedFilter] = useState<IPaginatedFilter>({
        limit: 25,
    })

    const [sortTitle, setSortTile] = useState<string>('Sort by')
    const [responseType, setResponseType] = useState<string>('Response type')

    useEffect(() => {
        getPaginated(paginatedFilter)
    }, [paginatedFilter])

    if (!pokemons) {
        return (
            <div className="d-flex justify-content-around mt-5">
                <Spinner animation="border" variant="secondary" />
            </div>
        )
    }

    const favPokemonsIds = favoritePokemons?.map((pokemon) => pokemon.id)
    const favoriteClicked = (pokemon: IPokemon, isSelected: boolean) => {
        isSelected ? removeFavorite(pokemon.id) : addFavorite(pokemon)
    }
    const pokemonsList = filteredResult(pokemons, searchTerm, sort)

    return (
        <>
            <div className="container d-flex dropdown my-4 px-md-2">
                <DropdownButton
                    title={sortTitle}
                    className="me-4 ms-0 ms-md-1"
                    size="lg"
                >
                    <Dropdown.Item
                        onClick={() => {
                            updateSort(ISort.SORT_BY_NAME_ASC)
                            setSortTile('Ascending names')
                        }}
                    >
                        Sort by Ascending names
                    </Dropdown.Item>
                    <Dropdown.Item
                        as="button"
                        onClick={() => {
                            updateSort(ISort.SORT_BY_NAME_DESC)
                            setSortTile('Descending names')
                        }}
                    >
                        Sort by Descending names
                    </Dropdown.Item>
                    <Dropdown.Item
                        as="button"
                        onClick={() => {
                            updateSort(ISort.SORT_BY_TYPE_ASC)
                            setSortTile('Ascending Types')
                        }}
                    >
                        Sort by Ascending Types
                    </Dropdown.Item>
                    <Dropdown.Item
                        as="button"
                        onClick={() => {
                            updateSort(ISort.SORT_BY_TYPE_DESC)
                            setSortTile('Descending Types')
                        }}
                    >
                        Sort by Descending Types
                    </Dropdown.Item>
                </DropdownButton>
                <DropdownButton title={responseType} className="me-4" size="lg">
                    <Dropdown.Item
                        onClick={() => {
                            setPaginatedFilter({ limit: 25, filter: true })
                            setResponseType('Paginated & Filtered')
                        }}
                    >
                        Paginated and filtered
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => {
                            setPaginatedFilter({ limit: 25 })
                            setResponseType('Paginated & Unfiltered')
                        }}
                    >
                        Paginated and Unfiltered
                    </Dropdown.Item>

                    <Dropdown.Item
                        onClick={() => {
                            setPaginatedFilter({ filter: true })
                            setResponseType('Unpaginated & Unpaginated')
                        }}
                    >
                        Unpaginated and Unpaginated
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => {
                            setPaginatedFilter({ filter: false })
                            setResponseType('Unpaginated & unfiltered')
                        }}
                    >
                        Unpaginated and unfiltered
                    </Dropdown.Item>
                </DropdownButton>
            </div>
            <PokemonsContainer
                favPokemonsIds={favPokemonsIds}
                favoriteClicked={favoriteClicked}
                pokemons={pokemonsList}
            />
            {paginatedFilter?.limit && (
                <BottomScrollListener
                    onBottom={() => {
                        const limit = paginatedFilter.limit
                            ? paginatedFilter.limit
                            : 0
                        getPaginated({
                            limit: limit + 25,
                            filter: paginatedFilter.filter,
                        })
                    }}
                />
            )}
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
        getPaginated: (paginatedFilter: IPaginatedFilter) => {
            dispatch(getPaginated(paginatedFilter))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
