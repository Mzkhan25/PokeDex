import React from 'react'
import { useGetPokemons } from '../hooks/useGetPokemons.hook'

export default function HomePage() {
    const { data } = useGetPokemons()
    if (data) {
        return (
            <>
                <div className="body-container">will this work</div>
            </>
        )
    }

    return (
        <>
            <div>sad</div>
        </>
    )
}
