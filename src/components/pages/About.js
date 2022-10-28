import React from "react";
import { Container, Row, Card } from "react-bootstrap";

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hi! I'm Donna, Web Designer and Developer from Oxford, Michigan. Please
        take a look at my recent work and contact me if you would like to know
        more.
      </p>
      <Container>
        <Row>
          <Card>
            <Card.Body>
              <Card.Img classNeme="imageMe" src="./Assets/img/DB.jpg" />
            </Card.Body>
          </Card>
        </Row>
      </Container>
      ;
    </div>
  );
}
