import { useQuery, gql } from '@apollo/client'
const GET_POKEMONS = gql`
    query {
        allPokemon {
            name
            locations {
                name
                region {
                    name
                }
            }
            shape
        }
    }
`

export const useGetPokemons = (sortField = 'price', order = 'desc') => {
    const { data, error, loading } = useQuery(GET_POKEMONS, {
        variables: {
            sortField,
            order,
        },
    })

    return { error, data, loading }
}
