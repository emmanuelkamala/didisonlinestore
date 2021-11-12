import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { ShoppingCartOutlined, PersonOutlineOutlined } from '@mui/icons-material';

const Header = () => {
  return (
    <>
     <Navbar collapseOnSelect expand="lg" bg="light">
       <Nav.Link as={Link} to="/">
        <Navbar.Brand>Didi's Online Store</Navbar.Brand>
       </Nav.Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/cart">
            <ShoppingCartOutlined />Cart
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            <PersonOutlineOutlined />Sign In
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
     </Navbar>
    </>
  )
}

export default Header;
