import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { ShoppingCartOutlined, PersonOutlineOutlined } from '@mui/icons-material';
import { logout } from '../../actions/userActions';

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  }

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

          { userInfo ? (
            <NavDropdown id='username' title={userInfo.name}>
              <Nav.Link as={Link} to="/profile">
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </Nav.Link>
              <Nav.Link to="#">
                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
              </Nav.Link>
            </NavDropdown>
          ) : (
            <Nav.Link as={Link} to="/login">
              <PersonOutlineOutlined />Sign In
            </Nav.Link>
          )}
          
        </Nav>
      </Navbar.Collapse>
     </Navbar>
    </>
  )
}

export default Header;
