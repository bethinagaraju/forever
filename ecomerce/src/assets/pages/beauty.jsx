import * as React from 'react';
import { Row, Col, Pagination } from 'react-bootstrap';
import CatlogCard from '../components/catlogcard';
import { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home(props) {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const productsPerPage = 16;
  const [productsdata, setProductsdata] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const [response1, response2, response3] = await Promise.all([
          axios.get('https://dummyjson.com/products/category/beauty'),
          axios.get('https://dummyjson.com/products/category/fragrances'),
          axios.get('https://dummyjson.com/products/category/mens-watches'),
        ]);

        setProductsdata([...response1.data.products, ...response2.data.products, ...response3.data.products]);

        console.log(response1.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const renderProducts = () => {
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToDisplay = productsdata.slice(startIndex, endIndex);

    return productsToDisplay.map((product) => (
      <Col key={product.id} xs={12} sm={6} md={3} lg={3} xl={3}>
        <CatlogCard
          title={product.title}
          price={product.price}
          image={product.images[0]}
          id={product.id}
        />
      </Col>
    ));
  };

  return (
    <div>
      <Row className="g-4">
        {renderProducts()}
      </Row>
      <Pagination className="justify-content-center">
        {[...Array(Math.ceil(productsdata.length / productsPerPage)).keys()].map((i) => (
          <Pagination.Item
            key={i + 1}
            active={i + 1 === page}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}
      </Pagination>
      <Footer />
    </div>
  );
}

export default Home;
