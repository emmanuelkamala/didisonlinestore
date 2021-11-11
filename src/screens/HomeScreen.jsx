import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/product/Product';
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader';
import Message from '../components/Message';

const Homescreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);

  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);

  return (
    <div>
      <h3>Best Selling Products</h3>
      { loading ? (<Loader />) 
        : error ? (<Message variant='danger'>{error}</Message>)
        : (
          <Row>
            {
              products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))
            }
          </Row>
        )
      }
    </div>
  )
}

export default Homescreen;
