import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button, Tab, Tabs, Badge } from 'react-bootstrap';
import axios from 'axios';

import { useCart } from '../../cartcontext';
import { FaHeart } from "react-icons/fa";
import Rating from './Rating';
import { HiHeart } from "react-icons/hi2";

const ProductDetails = () => {
  const [images, setImages] = useState('');
  const [responseData, setResponseData] = useState(null);
  const pathname = window.location.pathname;
  const id = pathname.split('/').pop();

  const { addToCart } = useCart();
  const { addLikedItem } = useCart();

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setResponseData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDataById();
  }, [id]);

  if (!responseData) {
    return <div>Loading...</div>;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }

    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-between">
              <Image src={images || responseData.thumbnail} thumbnail style={{ width: '600px', height: '600px' }} onClick={() => setImages(responseData.thumbnail)} />
            </div>
            <div className="mt-3">
              {responseData.images && responseData.images.map((img, index) => (
                <Image key={index} src={img} thumbnail style={{ width: '100px', height: '100px', marginRight: '10px' }} onClick={() => setImages(img)} />
              ))}
            </div>
          </div>
        </Col>
        <Col md={6}>
          <h2>{responseData.title} <Badge variant="dark">{responseData.brand}</Badge></h2>
          <div className="d-flex align-items-center mb-3">
            <Rating rating={responseData.rating} />
          </div>
          <h3 className="mb-3">${responseData.price}</h3>
          <p className="mb-4">{responseData.description}</p>
          <p>
            <strong>Category:</strong> {responseData.category}<br />
            <strong>Weight:</strong> {responseData.weight} kg<br />
            <strong>Availability:</strong> {responseData.availabilityStatus}
          </p>
          <Container className="mt-4">
            <Row className="justify-content-center">
              <Col xs={12} md={3} className="text-center">
                <Image
                  src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB562506492_.png"
                  fluid
                  style={{ maxWidth: '50px' }}
                />
                <p className="mt-2 text-primary">{responseData.returnPolicy}</p>
              </Col>
              <Col xs={12} md={3} className="text-center">
                <Image
                  src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB562506657_.png"
                  fluid
                  style={{ maxWidth: '50px' }}
                />
                <p className="mt-2 text-primary">Pay on Delivery</p>
              </Col>
              <Col xs={12} md={3} className="text-center">
                <Image
                  src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB562549966_.png"
                  fluid
                  style={{ maxWidth: '50px' }}
                />
                <p className="mt-2 text-primary">Free Delivery</p>
              </Col>
              <Col xs={12} md={3} className="text-center">
                <Image
                  src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png"
                  fluid
                  style={{ maxWidth: '50px' }}
                />
                <p className="mt-2 text-primary">{responseData.warrantyInformation || '1 Year'}</p>
              </Col>
            </Row>
          </Container>
          <Row className="mt-4">
            <div className="d-flex flex-row justify-content-between align-items-center" style={{ cursor: 'pointer' }}>
              <Button onClick={() => addToCart(responseData)} variant="dark" >ADD TO CART</Button>
              <HiHeart onClick={() => addLikedItem(responseData)} size={50} color="#FF8A8B" style={{ cursor: 'pointer' }} />
            </div>
          </Row>
        </Col>
      </Row>
      <Tabs defaultActiveKey="description" className="mt-5">
        <Tab eventKey="description" title="Description">
          <p className="mt-3">{responseData.description}</p>
          <p className="mt-3">
            <strong>Dimensions:</strong> Width: {responseData.dimensions?.width}, Height: {responseData.dimensions?.height}, Depth: {responseData.dimensions?.depth}
          </p>
          <p className="mt-3">
            <strong>Shipping Information:</strong> {responseData.shippingInformation}
          </p>
          {responseData.tags && responseData.tags.length > 0 && (
            <p className="mt-3">
              <strong>Tags:</strong> {responseData.tags.join(', ')}
            </p>
          )}
        </Tab>
        <Tab eventKey="reviews" title={`Reviews (${responseData.reviews.length})`}>
          {responseData.reviews.map((review, index) => {
            const formattedDate = formatDate(review.date);
            return (
              <div key={index} className="border-bottom pb-3 mb-3">
                <div className="d-flex align-items-center">
                  <strong className="font-weight-bold">{review.reviewerName}</strong>
                  <span className="ml-2 text-muted">Reviewed in the United Kingdom on {formattedDate}</span>
                </div>
                {review.verifiedPurchase && <span className="text-success small">Verified Purchase</span>}
                <p className="mt-2">{review.comment}</p>
                <div className="d-flex align-items-center">
                  <Rating rating={review.rating} />
                </div>
              </div>
            )
          })}
        </Tab>
      </Tabs>
    </Container>
  );
};

export default ProductDetails;

