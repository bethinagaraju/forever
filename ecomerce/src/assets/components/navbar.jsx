import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoPersonOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { RiPokerHeartsFill } from "react-icons/ri";
import './navbar.css';

function OffcanvasExample() {
  const breakpoints = ['false', 'sm', 'md', 'lg', 'xl', 'xxl'];
  const lastBreakpoint = breakpoints[breakpoints.length - 1];

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();


  const handleSearch = (e) => {
    e.preventDefault();
    if(searchQuery === ''){
      alert('Please enter Product Name');
      return;
    }
    navigate(`/searchpage?searchQuery=${searchQuery}`);
    searchQuery('');
  };

  const handleCart = (e) => {
    e.preventDefault();
    navigate(`/cart`);
  }

  const handleLiked = (e) => {
    e.preventDefault();
    navigate(`/likedproduct`);
  }

  return (
    <>
      <Navbar key={lastBreakpoint} expand={lastBreakpoint} className="bg-body-tertiary mb-3 fixed-top" style={{width: "100vw", borderBottom: "1px solid black"}}>
        <Container fluid>
          <Navbar.Brand onClick={() => navigate('/')} style={{ fontFamily: 'Latin', cursor: "pointer" }}><strong>FOREVER.</strong></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${lastBreakpoint}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${lastBreakpoint}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${lastBreakpoint}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${lastBreakpoint}`}>
                Offcanvas
              </Offcanvas.Title>  
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 navbar-design" style={{fontWeight: '500'}}>
                <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                <Nav.Link onClick={() => navigate('/mens')}>Mens</Nav.Link>
                <Nav.Link onClick={() => navigate('/womens')}>Womens</Nav.Link>
                <Nav.Link onClick={() => navigate('/gadgets')}>Gadgets</Nav.Link>
                <Nav.Link onClick={() => navigate('/beauty')}>Beauty</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button onClick={handleSearch} type='submit' variant="dark">
                  Search</Button>

              </Form>

              <Nav className="justify-content-end flex-grow-1 pe-3 gap-5">
                <CiShoppingCart size={40} style={{ cursor: 'pointer' }} onClick={handleCart}/> 
                <RiPokerHeartsFill size={40} color="#FF8A8B" onClick={handleLiked} style={{ cursor: 'pointer' }}/>
                <Nav.Link onClick={() => navigate('/orders')} style={{ fontSize: '18px' }}>Your Orders</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      
    </>
  );
}

export default OffcanvasExample;

