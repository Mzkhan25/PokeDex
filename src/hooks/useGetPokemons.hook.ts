import { useQuery, gql } from '@apollo/client'
const GET_POKEMONS = gql`
    query ($limit: Int!) {
        allPokemon(limit: $limit) {
            name
            shape
            types {
                name
            }
            sprites {
                front_default
            }
        }
    }
`

export const useGetPokemons = (limit = 10) => {
    const { data, error, loading } = useQuery(GET_POKEMONS, {
        variables: {
            limit,
        },
    })

    return { error, data, loading }
}
