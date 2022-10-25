import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { url }

export const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
    if (newWindow) newWindow.opener = null;
};

// export default function Footer() {
    export const Footer = () => (
  <Container fluid>
    <Row>
    <Col md lg>
      <a href="https://github.com/bussudo">
        img src="/Assets/img/github.png" alt="github icon"
      </a>
      </Col>
      <Col>
      </Col>
    </Row>
  </Container>;
    )
