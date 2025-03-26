import * as React from 'react';
import { Row, Col, Pagination } from 'react-bootstrap';
import CatlogCard from '../components/catlogcard';
import { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Home.css';



function Home(props) {

  
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const productsPerPage = 16;
  const [productsdata, setProductsdata] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('https://dummyjson.com/products?limit=190');
        setProductsdata(data.products);
        console.log(data.products);
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
    
      <h1 style={{ textAlign: 'center', padding: '2rem 0' }}>EXCLUSIVE PICKS JUST FOR YOU</h1>
      <Row className="g-4">
        {renderProducts()} 
      </Row>
    
<br/>

<Pagination className="justify-content-center custom-pagination">
  {[...Array(Math.ceil(productsdata.length / productsPerPage)).keys()].map((i) => (
    <Pagination.Item
      key={i + 1}
      active={i + 1 === page}
      onClick={() => handlePageChange(i + 1)}
      style={{ color: "black", backgroundColor: "white", borderColor: "black" }}
      className="custom-pagination-item"
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