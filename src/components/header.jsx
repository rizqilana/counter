import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: '#4a148c' }} color="faded" light>
          <NavbarBrand style={{ color: 'white' }} href="/" className="mr-auto">
            Go-Food
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
