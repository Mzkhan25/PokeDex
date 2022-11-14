import { gql } from '@apollo/client'
import client from './client'

export const getPokemons = () => {
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

export const getPaginatePokemons = () => {
    const limit = 10
    return client
        .query({
            query: gql`

             {
                    allPokemon(limit: ${limit}) {
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
