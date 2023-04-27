import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './index.css'

export const NavBar = () => {
  return (
    <div className='navBarContainer'>
        <img src="https://developer.tecmm.mx/web-tsj-designs/topBanner.jpg" style={{ width: '100%'}}/>

        <Navbar bg="light" expand="lg">
        <Container>
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" id='bootstrapNav'>
                <Nav.Link href="#home">SOMOS TECMM</Nav.Link>
                <Nav.Link href="#link">EDCORE</Nav.Link>
                <Nav.Link href="#home">ADMISIÓN</Nav.Link>
                <Nav.Link href="#link">VIDA ESTUDIANTIL</Nav.Link>
                <Nav.Link href="#home">CONTACTO</Nav.Link>
                <Nav.Link href="#link">SGIG</Nav.Link>
                <Nav.Link href="#home">QUEJAS Y DENUNCIAS</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}
