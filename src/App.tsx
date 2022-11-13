import React from 'react'
import './App.css'
import {
    ApolloClient,
    ApolloProvider,
    DefaultOptions,
    InMemoryCache,
} from '@apollo/client'
import {
    BrowserRouter,
    createBrowserRouter,
    Route,
    RouterProvider,
    Routes,
} from 'react-router-dom'
import HomePage from './components/HomePage'
import NavigationBar from './components/NavigationBar'
import Favorites from './components/Favorites'

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
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage />,
        },
        {
            path: '/favorites',
            element: <HomePage />,
        },
    ])
    return (
        <ApolloProvider client={client}>
            <NavigationBar />
            {/* <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
                <Routes>
                    <Route path={`/favorites`} element={<Favorites />} />
                </Routes>
            </BrowserRouter> */}
            <RouterProvider router={router} />
        </ApolloProvider>
    )
}

export default App
