import { gql } from '@apollo/client'
import client from './client'

export const getPokemons = () => {
    const limit = 10
    return client
        .query({
            query: gql`
                {
                    allPokemon {
                        name
                        types {
                            name
                        }
                        sprites {
                            front_default
                        }
                    }
                }
            `,
        })
        .then((res) => res.data.allPokemon)
}
