// Import Necessary File 
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logImg from '../../Images/travel-logo.png'
import './header.css'

// Header Component 
const Header = () => {
    const { user, logout } = useAuth();
    return (
        <Navbar bg="light" variant="light" className='p-0'>
            <Container>
                <Navbar.Brand href="#home" className='logoImg'>
                    <img src={logImg} alt="" />
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    {
                        user?.displayName ?
                            <>
                                <Nav.Link as={Link} to="/Myorders">My Orders</Nav.Link>
                                <Nav.Link as={Link} to="/ManageOrders">Manage All Orders</Nav.Link>
                                <Nav.Link as={Link} to="/addService">Add a New Service</Nav.Link>
                                <button onClick={logout} className='btn btn-danger'>Logout</button>
                                <span className='pt-2 ps-2'>{user.displayName}</span>
                            </>
                            :
                            <Nav.Link as={Link} to="/logIn" className='btn btn-danger'>Login</Nav.Link>
                    }

                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;