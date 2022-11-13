import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { GlobalState } from '../store/types/models'
import { connect } from 'react-redux'
import { searchByName } from '../store/actions/PokeDex.action'
interface Props {
    searchTerm: string
    searchByName: (name: string) => void
}
const NavigationBar = (props: Props) => {
    const [search, setSearch] = useState('')
    const { searchByName } = props

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">PokeDex</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/favorites">Favorites</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value)
                            }}
                        />
                        <Button
                            variant="outline-success"
                            onClick={() => searchByName(search)}
                        >
                            Search
                        </Button>
                    </Form>
                </Container>
            </Navbar>
        </>
    )
}

const mapStateToProps = (state: GlobalState) => {
    return { searchTerm: state?.pokemonState?.searchTerm }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        searchByName: (name: string) => {
            dispatch(searchByName(name))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)
