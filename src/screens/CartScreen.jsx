import React, { useEffect } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Card, Button } from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';

const CartScreen = () => {
  const { id } = useParams();
  const location = useLocation();

  const productId = id;
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;
  
  const dispatch = useDispatch();
  const cart = useSelector( state => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId){
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  return (
    <div className="py-12">
      Cart
    </div>
  )
}

export default CartScreen;
