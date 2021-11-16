import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

const PaymentMethodScreen = () => {
  const navigate = useNavigate();
  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress){
    navigate('/shipping');
  }

  const [paymentMethod, setPaymentMethod] = useState('paypal');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate('/placeorder');
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h2>Payment Method</h2>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
        </Form.Group>
        <Col>
          <Form.Check 
            type='radio' 
            label='PayPal or Credit/Debit Card' 
            id='PayPal' 
            name='paymentMethod' 
            value='PayPal' 
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}
          >

            </Form.Check>
        </Col>
        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentMethodScreen;
