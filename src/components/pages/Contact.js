import React from "react";
import { Container, Form, Row, Button } from "react-bootstrap";

export default function Contact() {
  function handleField(event) {
    console.log("away");
    // const nameInp = event.target.value.Text;
    console.log(event.target.value);

    const length = event.target.value.length;
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (length < 1) {
      alert("Field cannot be blank");
    }
    // if ((event.target.value.Text = "bussudo@gmail.com")) {
    //   console.log("yes");
    // }

    // if ((nameInp = "email" && (!filter.test(nameInp.value))
    // if ((nameInp = "email")) console.log(nameInp);
    // console.log(filter.test(nameInp.value));
    // alert("Please provide a valid email address");
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
