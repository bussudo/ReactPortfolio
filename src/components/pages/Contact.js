import React from "react";
import { Container, Form, Row, Button } from "react-bootstrap";

// const getRegExp = (type) => {
//   let regx = null;
//   switch (type) {
//     case 'EMAIL':
// let regx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//       break;
//       default:
//   }
// }

// const validateEmail = (email) => {
//   return validator.isEmail(email) && email.length > 0;
// };

export default function Contact() {
  function handleField(event) {
    console.log("away");
    const nameInp = event.target.value.name;
    const length = event.target.value.length;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (length < 1) {
      alert("Field cannot be blank");
    }
    if ((nameInp = "email" && !filter.test(email.value))) {
      {
        alert("Please provide a valid email address");
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
