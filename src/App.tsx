import React from 'react'
import './App.css'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import NavigationBar from './components/NavigationBar'
import Favorites from './components/Favorites'
import client from './service/client'

function App() {
    return (
        <ApolloProvider client={client}>
            <NavigationBar />
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </BrowserRouter>
        </ApolloProvider>
    )
}

export default App
