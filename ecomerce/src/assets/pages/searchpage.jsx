import React, { useState, useEffect } from 'react';
import { Row, Col, Pagination } from 'react-bootstrap';
import CatlogCard from '../components/catlogcard';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Footer from '../components/footer';

function SearchPage() {
  const [page, setPage] = useState(1);
  const productsPerPage = 16;
  const [productsdata, setProductsdata] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('searchQuery') || '';

  useEffect(() => {
    const fetchProducts = async () => {
      if (searchQuery) { 
        try {
          const { data } = await axios.get(
            `https://dummyjson.com/products/search?q=${searchQuery}`
          );
          setProductsdata(data.products);
          console.log(data.products);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      } else {
        console.log('No search query provided.');
        setProductsdata([]); 
      }
    };

    fetchProducts();
  }, [searchQuery]);

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
      {searchQuery ? ( 
        <Row className="g-4">
          {renderProducts()}
        </Row>
      ) : (
        <p>Please enter a search query.</p> 
      )}
      <Pagination className="justify-content-center">
        {[...Array(Math.ceil(productsdata.length / productsPerPage)).keys()].map(
          (i) => (
            <Pagination.Item
              key={i + 1}
              active={i + 1 === page}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </Pagination.Item>
          )
        )}
      </Pagination>
      <Footer />
    </div>
  );
}

export default SearchPage;
