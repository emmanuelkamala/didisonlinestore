import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { ShoppingCartOutlined, PersonOutlineOutlined } from '@mui/icons-material';

const Header = () => {
  return (
    <>
     <Navbar collapseOnSelect expand="lg" bg="light">
       <Link to="/">
        <Navbar.Brand>Didi's Online Store</Navbar.Brand>
       </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link to="/cart">
            <Nav.Link><ShoppingCartOutlined />Cart</Nav.Link>
          </Link>
          <Link to="/login">
            <Nav.Link><PersonOutlineOutlined />Sign In</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
     </Navbar>
    </>
  )
}

export default Header;
