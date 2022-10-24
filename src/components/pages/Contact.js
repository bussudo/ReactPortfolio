import React from "react";
import { Container, Form, Row, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <div>
      <h2>Contact Me!</h2>
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
              <Form.Text className="text-muted">
                I won't share your email with anyone
              </Form.Text>
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
    </div>
  );
}
