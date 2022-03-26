import React from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" className='p-3'>
            <Container>
                <NavbarBrand href="#home" className='fs-1 fw-bolder text-info'>Dependent Shop</NavbarBrand>
                <Nav className="ms-auto fs-5">
                    <NavLink href="#home">Home</NavLink>
                    <NavLink href="#features">Features</NavLink>
                    <NavLink href="#pricing">Pricing</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;