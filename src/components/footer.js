import React from "react";
import { Row, Container, Col } from "react-bootstrap";

export const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener, noreferrer");
  if (newWindow) newWindow.opener = null;
};

export default function footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col sm md>
          <a href="https://github.com/bussudo/">
            <img
              className="imageFooter"
              src="/Assets/img/github.png"
              alt="github icon"
            />
          </a>
        </Col>
        <Col sm md>
          <a href="https://www.linkedin.com/in/donnabussure">
            <img
              className="imageFooter"
              src="/Assets/img/linkedIn.png"
              alt="LinkedIn icon"
            />
          </a>
        </Col>
        <Col sm md>
          <a href="https://stackoverflow.com/users/19148306/bussudo">
            <img
              className="imageFooter"
              src="/Assets/img/stackoverflow.png"
              alt="StackOverflow icon"
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
