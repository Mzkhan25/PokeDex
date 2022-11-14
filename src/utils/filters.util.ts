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

    if (sort === ISort.SORT_BY_NAME_ASC) {
        sorted = pokemonList?.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sort === ISort.SORT_BY_NAME_DESC) {
        sorted = pokemonList?.sort((a, b) => b.name.localeCompare(a.name))
    }
    return sorted
}
export function sortedType(pokemon: IPokemon): IPokemon {
    let sort: PokemonType[] = []
    sort = pokemon.types.sort((a, b) => a.name.localeCompare(b.name))
    pokemon.types = sort
    return pokemon
}
