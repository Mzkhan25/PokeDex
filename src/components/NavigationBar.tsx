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
    const { searchTerm, searchByName } = props

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href={`${process.env.PUBLIC_URL}/`}>
                        PokeDex
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href={`${process.env.PUBLIC_URL}/favorites`}>
                            Favorites
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={(e) => {
                                searchByName(e.target.value)
                            }}
                        />
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
