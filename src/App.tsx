import React from 'react'
import logo from './logo.svg'
import './App.css'
import {
    ApolloClient,
    ApolloProvider,
    DefaultOptions,
    InMemoryCache,
} from '@apollo/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import NavigationBar from './components/NavigationBar'

const defaultOptions: DefaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
    },
}
const client = new ApolloClient({
    uri: `https://dex-server.herokuapp.com/`,
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
})

function App() {
    return (
        <ApolloProvider client={client}>
            <NavigationBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </ApolloProvider>
    )
}

export default App
