import { IPaginatedFilter } from './../store/types/models'
import { gql } from '@apollo/client'
import client from './client'

export const getPaginatePokemons = (paginatedFilter: IPaginatedFilter) => {
    const limit = paginatedFilter.limit || -1
    const filter = paginatedFilter.filter || false
    return client
        .query({
            query: gql`

             {
                    allPokemon(limit: ${limit}, filter: ${!filter}) {
                        id
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
