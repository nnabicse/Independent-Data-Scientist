import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home"><img className='logo' src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/services">SERVICES</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">BLOGS</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">ABOUT</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/services">LOGIN</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;