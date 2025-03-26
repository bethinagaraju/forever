import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="text-center text-white" >
      <Container className="p-0">
        <section className="mb-2">
          <Button variant="link" size="lg" className="text-dark m-1" href="#!" role="button">
            <FaFacebookF size={25} />
          </Button>

          <Button variant="link" size="lg" className="text-dark m-1" href="#!" role="button">
            <FaTwitter size={25} />
          </Button>

          <Button variant="link" size="lg" className="text-dark m-1" href="#!" role="button">
            <FaGoogle size={25} />
          </Button>

          <Button variant="link" size="lg" className="text-dark m-1" href="#!" role="button">
            <FaInstagram size={25} />
          </Button>

          <Button variant="link" size="lg" className="text-dark m-1" href="#!" role="button">
            <FaLinkedin size={25} />
          </Button>

          <Button variant="link" size="lg" className="text-dark m-1" href="#!" role="button">
            <FaGithub size={25} />
          </Button>
        </section>
      
      </Container>
    </footer>
  );
}

export default Footer;

