import React from 'react';
import { Container, Row, Col, Image, Button, Form, InputGroup } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import { useCart } from '../../cartcontext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, calculateTotal } = useCart();

  const navigate = useNavigate();

  function handleCheckout() {
    if(cartItems.length === 0){
      alert('Cart is empty');
    }
    else{
      navigate('/checkout');
    }
   
  }

  return (
    <Container className="mt-5">
      <h2 className="mb-4">YOUR CART</h2>
      {cartItems.map((item) => (
        <Row key={item.id} className="mb-4 align-items-center">
          <Col md={2}>
            <Image src={item.thumbnail} fluid />
          </Col>
          <Col md={6}>
            <h5>{item.name}</h5>
            <p>Price: ${item.price}</p>
          </Col>
          <Col md={3}>
            <InputGroup className="mb-3">
              <Form.Control
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              />
            </InputGroup>
          </Col>
          <Col md={1}>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
              <Trash />
            </Button>
          </Col>
        </Row>
      ))}

      <hr />

      <Row className="justify-content-end">
        <Col md={4}>
          <div className="mt-4">
            <h4 className="text-right">CART TOTALS</h4>
            <p className="text-right">Subtotal: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
            <p className="text-right">Shipping Fee: $0</p>
            <p className="text-right">Total: ${calculateTotal()}</p>
            <Button onClick={handleCheckout} variant="dark" className="mt-3 float-right">
              PROCEED TO CHECKOUT
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;