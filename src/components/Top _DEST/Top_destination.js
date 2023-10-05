import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import classes from './top.module.css';


function Top_destination() {
  return (
    <Container className={classes.custom} >
      <h1 className='text-center text-white  bg-dark'>Top Destinations</h1>
      <Row>
        <Col xs={12}  sm={12}  md={6} lg={4}>
          <Image src="your_image_url_1.png"  className='img-fluid w-100  mt-3  rounded' alt="Destination 1" />
        </Col>
        <Col xs={12} sm={12}  md={6} lg={4}>
          <Image src="your_image_url_2.png" alt="Destination 2"  className='img-fluid w-100 mt-3 rounded'/>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Image src="your_image_url_3.png" alt="Destination 3" className='img-fluid w-100  mt-3 rounded'/>
        </Col>
        <Col xs={12}  sm={12}  md={6} lg={4}>
          <Image src="your_image_url_4.png" alt="Destination 4"  className='img-fluid w-100  mt-3 rounded'/>
        </Col>
        <Col xs={12}  sm={12} md={6} lg={4}>
          <Image src="your_image_url_5.png" alt="Destination 5" className='img-fluid w-100  mt-3 rounded' />
        </Col>
        <Col xs={12}  sm={12}  md={6} lg={4}>
          <Image src="your_image_url_6.png" alt="Destination 6" className='img-fluid w-100  mt-3 rounded'/>
        </Col>
      </Row>
    </Container>
  );
}

export default Top_destination;
