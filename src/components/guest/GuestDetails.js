import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

function GuestDetails() {
  const [AdultCount, setAdultCount] = useState(0);
  const [RoomCount, setRoomCount] = useState(0);
  const [childrencount, setchildrencount] = useState(0);

  const adult = () => {
    setAdultCount((precount) => precount + 1);
  };
  const adultd = () => {
    setAdultCount((precount) => precount - 1);
  };
  const room = () => {
    setRoomCount((precount) => precount + 1);
  };
  const roomd = () => {
    setRoomCount((precount) => precount - 1);
  };
  const child = () => {
    setchildrencount((precount) => precount + 1);
  };
  const childd = () => {
    setchildrencount((precount) => precount - 1);
  };
  return (
    <Container>
      <Row>
        <Col xm={6}>
          <h5> Rooms</h5>
        </Col>
        <Col xm={6}>
          <div>
            <Button className="text-center " onClick={roomd}>
              -
            </Button>
            <span className="fs-4 ">{RoomCount}</span>
            <Button className="text-center" onClick={room}>
              +
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xm={6}>
          <h5> Adults</h5>
        </Col>
        <Col xm={6}>
          <div>
            <Button className="text-center " onClick={adultd}>
              -
            </Button>

            <span className="fs-4 ">{AdultCount}</span>
            <Button className="text-center" onClick={adult}>
              +
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xm={6}>
          <h5> Childrens</h5>
        </Col>
        <Col xm={6}>
          <div>
            <Button className="text-center " onClick={childd}>
              -
            </Button>
            <span className="fs-4 ">{childrencount}</span>
            <Button className="text-center" onClick={child}>
              +
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default GuestDetails;
