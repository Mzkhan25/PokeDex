import { searchedResult, sortedResult, sortedType } from '../filters.util'
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
                name: 'Pikachu',
                types: [{ name: 'Electricity' }],
                sprites: {
                    front_default: '',
                },
            },
        ]
        expect(searchedResult(pokemons, 'Pika')).toEqual(sortedPokemons)
    })

    it('should search pokemon list', function () {
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
        expect(sortedType(pokemon)).toEqual(sortedPokemonTypes)
    })
})
