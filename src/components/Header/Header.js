// Import Necessary File 
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/Myorders">My Orders</Nav.Link>
                    <Nav.Link as={Link} to="/ManageOrders">Manage All Orders</Nav.Link>
                    <Nav.Link as={Link} to="/addService">Add a New Service</Nav.Link>

                    <Nav.Link as={Link} to="/logIn">Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;