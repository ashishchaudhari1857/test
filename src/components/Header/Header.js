import React from 'react';
import classes from './Header.module.css'
import { Image, Row, Col, Container, Navbar, Nav } from 'react-bootstrap';
import SearchBox from '../SearchBox';
function Header() {
  
  return (
    <header className={classes.header}>
       <Container>
        <Row>
          <Navbar.Brand href="#"><Image src='travellogo.png' roundedCircle style={{height:'40px'}}></Image></Navbar.Brand>
          <Col className="text-center mt-2 text-white">
            <h1 className='fs-1'>Let the journey begin</h1>
            <span className='fs-8'>Get the best prices on 200000+ properties Worldwhile</span>
          </Col>
        </Row>
      </Container>
      <Navbar bg="transparent" variant="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto  mx-auto fs-5 fw-bold"> 
              <Nav.Link  href="#home">Hotel</Nav.Link>
              <Nav.Link   href="#about">Tour</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Activity</Nav.Link>
              <Nav.Link href="#contact">Car Transfer</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SearchBox ></SearchBox>
    </header>
  );
}

export default Header;
