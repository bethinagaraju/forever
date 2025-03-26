import React from 'react';
import { Container, Row, Col, Image, Button, Form, InputGroup } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import { useCart } from '../../cartcontext';

const LikedProduct = () => {
  const { cartItems, removeFromCart, updateQuantity, calculateTotal, likedItems, addToCart, removeFromLiked } = useCart();

  const handleAddToCartL = (item) => {
    addToCart(item);
    removeFromLiked(item.id);
  }
  return (
    <Container className="mt-5">
      <h2 className="mb-4">YOUR LIKED PRODUCTS</h2>
      {likedItems.map((item) => (
        <Row key={item.id} className="mb-4 align-items-center">
          <Col md={2}>
            <Image src={item.thumbnail} fluid />
          </Col>
          <Col md={6}>
            <h5>{item.name}</h5>
            <p>PRICE: ${item.price} </p>
          </Col>

          <Col md={2}>
          <Button onClick={() => handleAddToCartL(item)}  variant="dark" className=" float-right">
              ADD TO CART
            </Button>
          </Col>
          
          <Col md={1}>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromLiked(item.id)}>
              <Trash />
            </Button>
          </Col>
        </Row>
      ))}

     
    </Container>
  );
};

export default LikedProduct;