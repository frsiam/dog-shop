import React from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" className='p-3 justify-content-center'>
            <div>
                <NavbarBrand href="#home" className='fs-1 fw-bolder text-info text-center'>Dependent Shop</NavbarBrand>
                <h3 className='text-light text-center'>Chose 4 Clothes</h3>
            </div>
        </Navbar>
    );
};

export default Header;