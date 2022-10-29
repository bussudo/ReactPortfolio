import React from "react";
import { ListGroup } from "react-bootstrap";

export default function Resume() {
  return <h1>Resume</h1>;
  // <ListGroup<h2>
  //   <ListGroup.Item>
  <h2>
    Download my
    <a href="https://docdro.id/reuApNg" alt="resume download">
      Resume
    </a>
  </h2>;
  // </ListGroup.Item>
  // </ListGroup>
}

{
  function ActiveExample() {
    return (
      <ListGroup as="ul">
        {/* <ListGroup.Item as="li" active> */}
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>
    );
  }
  {
  }
}
