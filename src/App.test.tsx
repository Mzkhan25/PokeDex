import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import userEvent from '@testing-library/user-event'

const mockStore = configureMockStore()
const store = mockStore({})

test('renders basic app', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    )
})
test('navigation work should work', async () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    )

    expect(screen.getByText(/Pokedex/i)).toBeInTheDocument()
    await userEvent.click(screen.getByText(/Favorites/i))
})
