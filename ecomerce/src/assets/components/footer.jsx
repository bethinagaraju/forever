import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './footer2';

export default function App() {
  return (
    <footer className="mt-auto py-3 bg-light">
      <Container className="d-flex justify-content-center">
        <Row className="d-flex justify-content-center">
          <Col md={4} style={{marginRight: '60px'}}>
          <h5 className="text-secondary">FOREVER.</h5>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam nisi eos atque, adipisci, facere nostrum velit culpa voluptas excepturi quam architecto nobis obcaecati ratione id error expedita cum, corrupti dolore?
            </p>
          </Col>
          <Col md={2}>
            <h5 className="text-secondary">Products</h5>
            <ul className="list-unstyled text-secondary">
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
        
          <Col md={2}>
            <h5 className="text-secondary">Contact</h5>
            <ul className="list-unstyled text-secondary">
              <li>&#x1F310; www.forver.com</li>
              <li style={{color: 'black'}}>&#x1F4DE; +1 234 567 890</li>
              
            </ul>
          </Col>
        </Row>
      </Container>
      <Footer />
    </footer>
  );
}


