import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { ShoppingCartOutlined, PersonOutlineOutlined } from '@mui/icons-material';

const Header = () => {
  return (
    <>
     <Navbar collapseOnSelect expand="lg" bg="light">
      <Navbar.Brand href="/">Didi's Online Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/cart"><ShoppingCartOutlined />Cart</Nav.Link>
          <Nav.Link href="/login"><PersonOutlineOutlined />Sign In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
     </Navbar>
    </>
  )
}

export default Header;
