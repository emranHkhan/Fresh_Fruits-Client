import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    const { value1 } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value1;
    return (

        <Navbar collapseOnSelect expand="md" bg="info" variant="dark">
            <Navbar.Brand>
                <Link to="/" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'Montserrat, sans-serif' }}>Fresh Fruits</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/" className='link'>
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/orders" className='link'>
                        Orders
                    </Nav.Link>
                    <Nav.Link as={Link} to="/admin" className='link'>
                        Admin
                    </Nav.Link>

                    {
                        loggedInUser.email ? <p style={{ marginTop: '6px', color: 'white', fontWeight: 'bold' }}>{loggedInUser.name}</p> :
                            <Nav.Link as={Link} to="/login" className='link'>
                                Login
                            </Nav.Link>
                    }

                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
};

export default Header;