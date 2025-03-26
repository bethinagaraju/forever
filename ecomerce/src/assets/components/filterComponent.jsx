import React from 'react';
import { Form, Card, Container } from 'react-bootstrap';

const FilterComponent = () => {
  return (
    <Container>
      
      <Card style={{ width: "200px", height: "170px" }} className="mb-3">
        <Card.Body>
        <Card.Title>FILTERS</Card.Title>
          <Card.Title>CATEGORIES</Card.Title>
          <Form>
            <Form.Check
              type="checkbox"
              id="men"
              label="Men"
            />
            <Form.Check
              type="checkbox"
              id="women"
              label="Women"
            />
            <Form.Check
              type="checkbox"
              id="kids"
              label="Kids"
            />
          </Form>
        </Card.Body>
      </Card>

      <Card style={{ width: "200px", height: "170px" }}>
        <Card.Body>
          <Card.Title>TYPE</Card.Title>
          <Form>
            <Form.Check
              type="checkbox"
              id="topwear"
              label="Topwear"
            />
            <Form.Check
              type="checkbox"
              id="bottomwear"
              label="Bottomwear"
            />
            <Form.Check
              type="checkbox"
              id="winterwear"
              label="Winterwear"
            />
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default FilterComponent;