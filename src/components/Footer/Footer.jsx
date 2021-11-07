import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <Row>
        <Col className="text-center py-3">
        About Us
        </Col>
        <Col className="text-center py-3">
        Pages
        </Col>
        <Col className="text-center py-3">
        Payment Methods
        </Col>
      </Row>
    </div>
  )
}

export default Footer;
