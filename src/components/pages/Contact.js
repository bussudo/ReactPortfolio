import React from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import validator from "validator";

// const getRegExp = (type) => {
//   let regx = null;
//   switch (type) {
//     case 'EMAIL':
//       regx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//       break;
//       default:
//   }
// }
const validateEmail = (email) => {
  return validator.isEmail(email) && email.length > 0;
};

export default function Contact() {
  return (
    <div>
      <h2>Contact Me!</h2>
      <Container>
        <Form>
          <Row>
            <Form.Group className="mb-4" controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="input" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-4" controlId="formEmail">
              <Form.Label>Email Address:</Form.Label>
              <Form.Control type="email" placeholder="Example@email.com" />
              <Form.Text className="text-muted">
                I won't share your email with anyone
              </Form.Text>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-4" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} cols={50}></Form.Control>
            </Form.Group>
          </Row>
          <Row>
            <Button type="submit">Submit</Button>
          </Row>
        </Form>
      </Container>
    </div>
  );
}
