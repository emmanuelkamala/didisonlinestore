import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Row, Col, Button, Form, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getUserDetails, updateUserProfile } from '../actions/userActions';
import { listMyOrders } from '../actions/orderActions';
import Close from '@mui/icons-material/Close';

const ProfileScreen = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();

  const userDetails = useSelector(state => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector(state => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  
  const orderListMy = useSelector(state => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  useEffect(() => {
    if (!userInfo){
      navigate('/login')
    } else {
      if(!user.name){
        dispatch(getUserDetails('profile'));
        dispatch(listMyOrders());
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [navigate, userInfo, dispatch, user])

  const submitHandler = e => {
    e.preventDefault();
    if (password !== confirmPassword){
      setMessage('Passwords do not match')
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }))
    }
  }

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        { message && <Message variant='danger'>{message}</Message> }
        { error && <Message variant='danger'>{error}</Message> }
        { success && <Message variant='success'>{success}</Message> }
        { loading && <Loader /> }

        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name' className='my-2'>
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type='text' 
              placeholder='Enter name' 
              value={name} 
              onChange={(e)=> setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='email' className='my-2'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control 
              type='email' 
              placeholder='Enter email' 
              value={email} 
              onChange={(e)=> setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='password' className='my-2'>
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type='password' 
              placeholder='Enter password' 
              value={password} 
              onChange={(e)=> setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='confirmPassword' className='my-2'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control 
              type='password' 
              placeholder='Confirm password' 
              value={confirmPassword} 
              onChange={(e)=> setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button 
            type='submit' 
            variant='primary' 
            className='my-2'
          >
            Update
          </Button>
        </Form>
      </Col>

      <Col md={9}>
        <h3>My Orders</h3>
        {
          loadingOrders ? <Loader /> : 
          errorOrders ? <Message variant='danger'>{errorOrders}</Message> : 
          (
            <Table striped bordered hover responsive className='table-sm'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>PAID</th>
                  <th>DELIVERED</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  orders.map(order => (
                    <tr key={order._id}>
                      <td>{order._id}</td>
                      <td>{order.createdAt.substring(0, 10)}</td>
                      <td>{order.totalPrice}</td>
                      <td>{order.isPaid ? order.paidAt.substring(0, 10) : <Close style={{ color: 'red' }} /> }</td>
                      <td>{order.isDelivered ? order.deliveredAt.substring(0, 10) : <Close style={{ color: 'red' }} />}</td>
                      <td>
                        <Link to={`/order/${order._id}`}>
                          <Button className='btn btn-sm' variant='light'>Details</Button>
                        </Link>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          )
        }
      </Col>
    </Row>
  )
}

export default ProfileScreen;
