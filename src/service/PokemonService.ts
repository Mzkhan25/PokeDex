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

export const getPaginatePokemons = (limit: number) => {
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
