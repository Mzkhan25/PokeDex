import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function NavigationBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#/">PokeDex</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/favorites">Favorites</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar
