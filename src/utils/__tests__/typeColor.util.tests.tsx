import { PokemonType } from '../../store/types/models'
import { typeColor } from '../typeColor.util'

describe('Type Color', function () {
    it('should return right type color', function () {
        const dragonType: PokemonType = { name: 'Dragon' }
        const fireType: PokemonType = { name: 'Fire' }
        const groundType: PokemonType = { name: 'Ground' }
        const steelType: PokemonType = { name: 'Steel' }
        const fightingType: PokemonType = { name: 'Fighting' }
        const rockType: PokemonType = { name: 'Rock' }

        expect(typeColor(dragonType)).toEqual('background-color-dragon')
        expect(typeColor(fireType)).toEqual('background-color-fire')
        expect(typeColor(groundType)).toEqual('background-color-ground')
        expect(typeColor(steelType)).toEqual('background-color-steel')
        expect(typeColor(fightingType)).toEqual('background-color-fighting')
        expect(typeColor(rockType)).toEqual('background-color-rock')
    })
})
