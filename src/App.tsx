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
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="App">
                                <header className="App-header">
                                    <img
                                        src={logo}
                                        className="App-logo"
                                        alt="logo"
                                    />
                                    <p>
                                        Edit <code>src/App.tsx</code> and save
                                        to reload.
                                    </p>
                                    <a
                                        className="App-link"
                                        href="https://reactjs.org"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Learn React
                                    </a>
                                </header>
                                <HomePage />
                            </div>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </ApolloProvider>
    )
}

export default App
