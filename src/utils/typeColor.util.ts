import { IPokemonType, PokemonType } from './../store/types/models'
export function typeColor(type: PokemonType): string {
    switch (type.name) {
        case IPokemonType.BUG:
            return 'background-color-bug'
        case IPokemonType.DRAGON:
            return 'background-color-dragon'

        case IPokemonType.FAIRY:
            return 'background-color-fairy'

        case IPokemonType.FIRE:
            return 'background-color-fire'

        case IPokemonType.GHOST:
            return 'background-color-ghost'

        case IPokemonType.GROUND:
            return 'background-color-ground'

        case IPokemonType.NORMAL:
            return 'background-color-normal'

        case IPokemonType.PSYCHIC:
            return 'background-color-psychic'

        case IPokemonType.STEEL:
            return 'background-color-steel'

        case IPokemonType.DARK:
            return 'background-color-dark'

        case IPokemonType.ELECTRIC:
            return 'background-color-electric'

        case IPokemonType.FIGHTING:
            return 'background-color-fighting'

        case IPokemonType.FLYING:
            return 'background-color-flying'

        case IPokemonType.GRASS:
            return 'background-color-grass'

        case IPokemonType.ICE:
            return 'background-color-ice'

        case IPokemonType.POISON:
            return 'background-color-poison'

        case IPokemonType.ROCK:
            return 'background-color-rock'

        case IPokemonType.WATER:
            return 'background-color-water'

        default:
            return ''
            break
    }
}
