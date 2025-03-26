import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { Radio } from '@mui/material'; 
import { useCart } from '../../cartcontext';
import { useNavigate } from 'react-router-dom';
import Orders from './orders';

const CheckoutPage = () => {

 const navigate = useNavigate();

  const { calculateTotal, addOrderItem, clearCart, cartItems } = useCart();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
    paymentMethod: 'stripe', 
  });

  const [paymentMethod, setPaymentMethod] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setPaymentMethod(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(cartItems.length === 0){
      alert('Cart is empty');
      return;
    }

    if(paymentMethod === 0){
      alert('Please select a payment method');
      return;
    }
    
    addOrderItem();
    clearCart();
    alert('Order placed successfully!');
    navigate('/orders');
  };

  return (
    <Container className="mt-5">
      <Row className="g-10" style={{ gap: '100px' }}>
        <Col md={5}>
          <h3>DELIVERY INFORMATION</h3>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Street</Form.Label>
              <Form.Control
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
              />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Zip code</Form.Label>
                  <Form.Control
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Col>

        <Col md={6}>
          <h3>CART TOTALS</h3>
          <p>${calculateTotal()}</p>
          <p>Shipping Fee: $0</p>
          <h3>Total Amount to pay: ${calculateTotal()}</h3>
          <h5 className="mt-4">PAYMENT METHOD</h5>
          <InputGroup className="mb-3">
            <InputGroup.Radio
              aria-label="Radio button for Cash on Delivery"
              name="paymentMethod"
              value="cash"
              checked={formData.paymentMethod === 'cash'}
              onChange={handleChange}
            />
            <FormControl value="Cash on Delivery" disabled />
          </InputGroup>

          <Button variant="dark" type="submit" onClick={handleSubmit}>
            PLACE ORDER
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
