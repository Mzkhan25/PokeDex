import { IPokemon, ISort, PokemonType } from './../store/types/models'
export function filteredResult(
    pokemonList: IPokemon[],
    searchTerm?: string,
    sort?: ISort
): IPokemon[] {
    let result: IPokemon[] = pokemonList
    if (searchTerm) result = searchedResult(pokemonList, searchTerm)

    if (sort) result = sortedResult(result, sort)

    return result
}

export function searchedResult(
    pokemonList: IPokemon[],
    searchTerm: string
): IPokemon[] {
    return searchTerm
        ? pokemonList?.filter((pokemon: IPokemon) =>
              pokemon.name.includes(searchTerm)
          ) || []
        : pokemonList
}

export function sortedResult(pokemonList: IPokemon[], sort: ISort): IPokemon[] {
    let sorted: IPokemon[] = []

    switch (sort) {
        case ISort.SORT_BY_NAME_ASC:
            sorted = pokemonList?.sort((a, b) => a.name.localeCompare(b.name))
            break

        case ISort.SORT_BY_NAME_DESC:
            sorted = pokemonList?.sort((a, b) => b.name.localeCompare(a.name))
            break

        case ISort.SORT_BY_TYPE_ASC:
            sorted = pokemonList?.map((pokemon) => {
                return sortedPokemonType(pokemon, sort)
            })
            sorted = pokemonList?.sort((a, b) =>
                a.types[0].name.localeCompare(b.types[0].name)
            )
            break

        case ISort.SORT_BY_TYPE_DESC:
            sorted = pokemonList?.map((pokemon) => {
                return sortedPokemonType(pokemon, sort)
            })
            sorted = pokemonList?.sort((a, b) =>
                b.types[0].name.localeCompare(a.types[0].name)
            )
            break

        default:
            break
    }
    return sorted
}
export function sortedPokemonType(pokemon: IPokemon, sort: ISort): IPokemon {
    let sortedPokemonType: PokemonType[] = []

    switch (sort) {
        case ISort.SORT_BY_TYPE_ASC:
            sortedPokemonType = pokemon.types.sort((a, b) =>
                a.name.localeCompare(b.name)
            )

            break
        case ISort.SORT_BY_TYPE_DESC:
            sortedPokemonType = pokemon.types.sort((a, b) =>
                b.name.localeCompare(a.name)
            )

            break

        default:
            break
    }
    pokemon.types = sortedPokemonType

    return pokemon
}
