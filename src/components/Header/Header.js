import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    console.log( user );

    return (
        <header className="header">
            <Navbar collapseOnSelect expand="lg" className="nav navbar px-3" bg="info" variant="dark">
                {/* Brand Logo */ }
                <Navbar.Brand>
                    <NavLink to="/home" className="me-5">
                        <img style={ { width: '150px' } } src={ logo } alt="logoImage" />
                    </NavLink>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    {/* menu bar and primary route button */ }
                    <Nav className="me-auto">
                        <NavLink className="me-3 text-dark text-decoration-none" to="/home"><FontAwesomeIcon icon={ faHome } /></NavLink>
                        <NavLink className="me-3 text-dark text-decoration-none" to="/about">About Us</NavLink>
                        <NavLink className="me-3 text-dark text-decoration-none" to="/treatments">Treatments Option</NavLink>
                        <NavLink className="me-3 text-dark text-decoration-none" to="/doctors">Doctors</NavLink>
                        <NavLink className="me-3 text-dark text-decoration-none" to="/contact">Contact Us</NavLink>
                    </Nav>

                    {/* dropdown category menu */ }
                    <Nav className="me-3 text-dark text-decoration-none">
                        <NavDropdown title={ <span className="text-dark">Departments</span> } id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Infertility</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Obstetrics and Gynecology</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Reproductive Medicine</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Embryology</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Reproductive Medicine</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.6">Andrology</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    {/* login and signup section */ }
                    <Nav className="p-3">
                        {
                            !user.email ? <span><NavLink className="me-3 text-danger text-decoration-none fw-bold" to="/login">Login</NavLink><NavLink className="text-danger text-decoration-none fw-bold" to="/register">Sign-Up</NavLink></span> :
                                <button className="btn btn-info border border-danger me-2" onClick={ logout }>Log Out <span className="fw-bold text-danger">{ user?.email }</span></button>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header >
    );
};

export default Header;