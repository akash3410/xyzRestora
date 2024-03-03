import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Nav, NavItem, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap'

const NavigationComponent = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div>
      <Navbar color="dark" dark expand='sm'>
        <NavbarToggler onClick={navToggle} />
        <NavbarBrand href="/">XYZ RESTORA</NavbarBrand>
        <Collapse isOpen={isNavOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/" className='nav-link'>Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/menu" className='nav-link'>Menu</Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className='nav-link'>About</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" className='nav-link'>Contact</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationComponent