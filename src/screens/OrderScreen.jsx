import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row, ListGroup, Image, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import { getOrderDetails } from '../actions/orderActions';

const OrderScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const orderDetails = useSelector(state => state.orderDetails);
  const { order, loading, error } = orderDetails;

  if (!loading){
    order.itemsPrice = order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  }

  useEffect(() => {
    dispatch(getOrderDetails(id));
  }, [dispatch, id])

  return loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : 
    <>
      <h3>Order {order._id}</h3>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h4>Shipping</h4>
              <p><strong>Name: </strong> {order.user.name}</p>
              <p><Link to={`mailto: ${order.user.email}`}>{order.user.email}</Link></p>
              <p>
                <strong>Address: </strong>
                {order.shippingAddress.address},{' '}
                {order.shippingAddress.city}{' '}
                {order.shippingAddress.postalCode},{' '}
                {order.shippingAddress.country}
              </p>

              {
                order.isDelivered ? 
                <Message variant='success'>Delivered on {order.deliveredAt}</Message> :
                <Message variant='danger'>Not Delivered</Message>
              }
            </ListGroup.Item>

            <ListGroup.Item>
              <h4>Payment Method</h4>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>

              {
                order.isPaid ? 
                <Message variant='success'>Paid on {order.paidAt}</Message> :
                <Message variant='danger'>Not Paid</Message>
              }

            </ListGroup.Item>

            <ListGroup.Item>
              <h4>Ordered Items</h4>
              {
                order.orderItems.length === 0 ? <Message>Order is empty</Message> : (
                  <ListGroup variant='flush'>
                    {
                      order.orderItems.map((item, index) =>(
                        <ListGroup.Item key={index}>
                          <Row>
                            <Col md={1}>
                              <Image src={item.image} alt={item.name} fluid rounded />
                            </Col>
                            <Col>
                              <Link to={`/product/${item.product}`}>
                                {item.name}
                              </Link>
                            </Col>
                            <Col md={4}>
                              {item.qty} × ${item.price} = ${item.qty * item.price}
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      ))
                    }
                  </ListGroup>
                )
              }
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h5>Order Summary</h5>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${order.itemsPrice}</Col>
                </Row>  
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>  
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${order.taxPrice}</Col>
                </Row>  
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>  
              </ListGroup.Item>

            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
}

export default OrderScreen;
