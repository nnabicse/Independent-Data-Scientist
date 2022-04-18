import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home"><h2 className='independent'>INDEPENDENT</h2><p className='data-scientist'>DATA SCIENTIST</p></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto text-center">
                            <Nav.Link as={Link} to="/home"><span className='navbar-item'>HOME</span></Nav.Link>
                            <Nav.Link as={Link} to="/services"><span className='navbar-item'>SERVICES</span></Nav.Link>
                            <Nav.Link as={Link} to="/blogs"><span className='navbar-item'>BLOGS</span></Nav.Link>
                            <Nav.Link className='navbar-item' as={Link} to="/experiences"><span className='navbar-item'>EXPERIENCES</span></Nav.Link>
                            <Nav.Link className='navbar-item' as={Link} to="/about"><span className='navbar-item'>ABOUT</span></Nav.Link>
                        </Nav>
                        <Nav className='toggler'>
                            {
                                user ?
                                    <button className='btn btn-primary border-0' onClick={handleSignOut}><Nav.Link as={Link} to="">
                                        <span className='navbar-item'>
                                            SIGN OUT
                                        </span>
                                    </Nav.Link></button>
                                    :
                                    <button className='btn btn-primary border-0'><Nav.Link as={Link} to="/login">
                                        <span className='navbar-item'>
                                            LOGIN
                                        </span>
                                    </Nav.Link></button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;