import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Container, Form, Row } from "react-bootstrap";

const App = () => <PortfolioContainer />;

function contactCard() {
  return (
    <div className="contactCard">
      <header className="App-header">
        <Container>
          <Form>
            <Row>
              <Form.Group controlId="formName">
                <Form.Label>Name:</Form.Label>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address:</Form.Label>
                <Form.Control type="email" placeholder="Example@email.com" />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
              </Form.Group>
            </Row>
            <Button type="submit">Submit</Button>
          </Form>
        </Container>
        <Card className="mb-3" style={{ color: "#000" }}>
          <Card.Img src="./Assets/parkme.png/200/50" />
          <Card.Body>
            <Card.Title>Message</Card.Title>
          </Card.Body>
        </Card>
      </header>
    </div>
  );
}

export default App;
