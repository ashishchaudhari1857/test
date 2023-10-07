import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';
import MYCalendar from './calender/MyCalender';
// import Guest from './guest/Guest';
import Guest from './guest/Guest';

function SearchBox() {
  const a = [
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Kolkata",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Lucknow"
  ];
  const [filteredData, setFilteredData] = useState([]);
  let data;

  const filterdata = (e) => {
    const inputValue = e.target.value.toLowerCase();
    if( inputValue.length===0){
  setFilteredData([])
    }else{
    data = a.filter((item) => item.toLowerCase().includes(inputValue));
    setFilteredData(data);
    }
  };

  return (
    <Container className='bg-black p-3' style={{ borderRadius: "14px" }}>
      <Row>
        <Col xs={12} lg={4} className='px-1'>
          <Form className='bg-light mt-2 p-1 rounded-lg' style={{ borderRadius: "14px" }}>
            <Form.Group controlId="formBasicEmail">
            <div className='fs-8 fw-bold text-center'>location</div>

              <Form.Control type="SEARCH" placeholder="search location"  onChange={filterdata} />
              <ul>
                {filteredData?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Form.Group>
          </Form>
        </Col>
        <Col xs={12} md={12} lg={4} className="px-1 text-center">
          <MYCalendar title={"check in"}></MYCalendar>
        </Col>
        
        <Col lg={3} className="px-1">
          <Guest></Guest>
        </Col>
        <Col lg={1} className='text-center mt-3'>
          <Button className='bg-primary text-center'>search</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBox;
