import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import FormContainer from '../components/FormContainer';

const ShippingScreen = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <FormContainer>
      <h2>Shipping</h2>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address' className='my-2'>
          <Form.Label>Address</Form.Label>
          <Form.Control 
            type='text' 
            placeholder='Enter address' 
            value={address} 
            onChange={(e)=> setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city' className='my-2'>
          <Form.Label>City</Form.Label>
          <Form.Control 
            type='text' 
            placeholder='Enter city' 
            value={city} 
            onChange={(e)=> setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='postalCode' className='my-2'>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control 
            type='text' 
            placeholder='Enter postal code' 
            value={postalCode} 
            onChange={(e)=> setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='country' className='my-2'>
          <Form.Label>Country</Form.Label>
          <Form.Control 
            type='text' 
            placeholder='Enter country' 
            value={country} 
            onChange={(e)=> setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen;
