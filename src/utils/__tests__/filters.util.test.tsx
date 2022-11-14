import {
    searchedResult,
    sortedResult,
    sortedPokemonType,
} from '../filters.util'
import { IPokemon, ISort } from '../../store/types/models'

describe('Filters', function () {
    it('should sort pokemons list in ascending order', function () {
        const pokemons: IPokemon[] = [
            {
                name: 'Pikachu',
                types: [{ name: 'Electricity' }],
                sprites: {
                    front_default: '',
                },
            },
            {
                name: 'Balbasur',
                types: [{ name: 'Water' }],
                sprites: {
                    front_default: '',
                },
            },
        ]
        const sortedPokemons: IPokemon[] = [
            {
                name: 'Balbasur',
                types: [{ name: 'Water' }],
                sprites: {
                    front_default: '',
                },
            },
            {
                name: 'Pikachu',
                types: [{ name: 'Electricity' }],
                sprites: {
                    front_default: '',
                },
            },
        ]
        expect(sortedResult(pokemons, ISort.SORT_BY_NAME_ASC)).toEqual(
            sortedPokemons
        )
    })
    it('should sort pokemons list in descending order', function () {
        const pokemons: IPokemon[] = [
            {
                name: 'Balbasur',
                types: [{ name: 'Water' }],
                sprites: {
                    front_default: '',
                },
            },
            {
                name: 'Pikachu',
                types: [{ name: 'Electricity' }],
                sprites: {
                    front_default: '',
                },
            },
        ]
        const sortedPokemons: IPokemon[] = [
            {
                name: 'Pikachu',
                types: [{ name: 'Electricity' }],
                sprites: {
                    front_default: '',
                },
            },
            {
                name: 'Balbasur',
                types: [{ name: 'Water' }],
                sprites: {
                    front_default: '',
                },
            },
        ]
        expect(sortedResult(pokemons, ISort.SORT_BY_NAME_DESC)).toEqual(
            sortedPokemons
        )
    })

    it('should search pokemon list', function () {
        const pokemons: IPokemon[] = [
            {
                name: 'Pikachu',
                types: [{ name: 'Electricity' }],
                sprites: {
                    front_default: '',
                },
            },
            {
                name: 'Balbasur',
                types: [{ name: 'Water' }],
                sprites: {
                    front_default: '',
                },
            },
        ]
        const sortedPokemons: IPokemon[] = [
            {
                name: 'Pikachu',
                types: [{ name: 'Electricity' }],
                sprites: {
                    front_default: '',
                },
            },
        ]
        expect(searchedResult(pokemons, 'Pika')).toEqual(sortedPokemons)
    })

    it('should sort pokemon type in ascending order', function () {
        const pokemon: IPokemon = {
            name: 'Pikachu',
            types: [{ name: 'Water' }, { name: 'Fire' }],
            sprites: {
                front_default: '',
            },
        }
        const sortedPokemonTypes: IPokemon = {
            name: 'Pikachu',
            types: [{ name: 'Fire' }, { name: 'Water' }],
            sprites: {
                front_default: '',
            },
        }
        expect(sortedPokemonType(pokemon, ISort.SORT_BY_TYPE_ASC)).toEqual(
            sortedPokemonTypes
        )
    })

    it('should sort pokemon type in descending order', function () {
        const pokemon: IPokemon = {
            name: 'Pikachu',
            types: [{ name: 'Fire' }, { name: 'Grass' }],
            sprites: {
                front_default: '',
            },
        }
        const sortedPokemonTypes: IPokemon = {
            name: 'Pikachu',
            types: [{ name: 'Grass' }, { name: 'Fire' }],
            sprites: {
                front_default: '',
            },
        }
        expect(sortedPokemonType(pokemon, ISort.SORT_BY_TYPE_DESC)).toEqual(
            sortedPokemonTypes
        )
    })

    it('should sort pokemons list in ascending type order', function () {
        const pokemons: IPokemon[] = [
            {
                name: 'Balbasur',
                types: [{ name: 'Grass' }, { name: 'Fire' }],
                sprites: {
                    front_default: '',
                },
            },
            {
                name: 'Pikachu',
                types: [{ name: 'Elect' }, { name: 'Sand' }],
                sprites: {
                    front_default: '',
                },
            },
        ]
        const sortedPokemons: IPokemon[] = [
            {
                name: 'Pikachu',
                types: [{ name: 'Elect' }, { name: 'Sand' }],
                sprites: {
                    front_default: '',
                },
            },
            {
                name: 'Balbasur',
                types: [{ name: 'Fire' }, { name: 'Grass' }],
                sprites: {
                    front_default: '',
                },
            },
        ]
        expect(sortedResult(pokemons, ISort.SORT_BY_TYPE_ASC)).toEqual(
            sortedPokemons
        )
    })
})
