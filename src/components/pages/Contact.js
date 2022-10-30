import React from "react";
import { Container, Form, Row, Button } from "react-bootstrap";

export default function Contact() {
  function handleField(event) {
    console.log("away");
    const nameInp = event.target.name;
    console.log(nameInp);

    const length = event.target.value.length;
    if (length < 1) {
      alert("Field cannot be blank");
    }
    if (nameInp === "email") {
      var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!event.target.value.match(regex)) {
        alert("Please enter a valid email");
      }
    }
  }
  return (
    <div>
      <h2>Contact Me!</h2>
      <Container>
        <Form>
          <Row>
            <Form.Group className="mb-4" controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                name="name"
                onBlur={handleField}
                type="input"
                controlId="Name"
              ></Form.Control>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-4" controlId="formEmail">
              <Form.Label>Email Address:</Form.Label>
              <Form.Control
                name="email"
                onBlur={handleField}
                type="email"
                placeholder="Example@email.com"
              />
              <Form.Text className="text-muted">
                I won't share your email with anyone
              </Form.Text>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-4" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                name="message"
                onBlur={handleField}
                as="textarea"
                rows={4}
                cols={50}
                type="input"
              ></Form.Control>
            </Form.Group>
          </Row>
          <Row>
            <Button type="submit" value={"submit"}>
              Submit
            </Button>
          </Row>
        </Form>
      </Container>
    </div>
  );
}
