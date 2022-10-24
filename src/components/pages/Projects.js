import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import parkme from "./Assets/img/parkme.png";

export default function Projects() {
  return (
    <div>
      <h1>My Work</h1>
      <Container>
        <Row>
          <Col md>
            <Card className="mb-3" style={{ color: "#000" }}>
              <Card.Img src={parkme} alt="car" />
              <Card.Body>
                <Card.Title>Park Me</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md>
            <Card className="mb-3" style={{ color: "#000" }}>
              <Card.Img src="./Assets/img/weboot.png/200/50" />
              <Card.Body>
                <Card.Title>WeBoot</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
