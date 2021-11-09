import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/product/Product';
import products from '../../backend/data/products';

const Homescreen = () => {
  return (
    <div>
      <h3>Best Selling Products</h3>
      <Row>
        {
          products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product}/>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default Homescreen;
