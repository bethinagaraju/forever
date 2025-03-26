import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../cartcontext';

const Orders = () => {
  const { orderItems } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">YOUR ORDERS</h2>
      {orderItems.map((order, index) => (
        <div key={index}>
          <h4 className="mb-3">Order #{index + 1}</h4>
          {order.items.map((item) => (
            <Row key={item.id} className="mb-4 align-items-center">
              <Col md={2}>
                <Image src={item.thumbnail} fluid />
              </Col>
              <Col md={6}>
                <h5>{item.title}</h5> 
                <p>${item.price} - Quantity: {item.quantity}</p>
              </Col>
            </Row>
          ))}
          <hr />
        </div>
      ))}

      <Row className="justify-content-end">
        <Col md={4}>
          <div className="mt-4">
            <h4 className="text-right">ORDER TOTALS</h4>
            <p className="text-right">
              Total : $
              {orderItems.reduce(
                (orderTotal, order) =>
                  orderTotal +
                  order.items.reduce(
                    (itemTotal, item) => itemTotal + item.price * item.quantity,
                    0
                  ),
                0
              )}
            </p>
            
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Orders;