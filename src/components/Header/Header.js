// Import Necessary File 
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logImg from '../../Images/travel-logo.png'
import './header.css'

// Header Component 
const Header = () => {
    return (
        <Navbar bg="light" variant="light" className='p-0'>
            <Container>
                <Navbar.Brand href="#home" className='logoImg'>
                    <img src={logImg} alt="" />
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;