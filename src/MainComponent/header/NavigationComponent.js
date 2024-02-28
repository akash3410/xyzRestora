import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'

const NavigationComponent = () => {
  return (
    <div>
      <Navbar
        color="dark"
        dark
      >
        <NavbarBrand href="/">
          XYZ RESTORA
        </NavbarBrand>
      </Navbar>
    </div>
  )
}

export default NavigationComponent