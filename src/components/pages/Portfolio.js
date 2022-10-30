import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

export default function Portfolio() {
  return (
    <div className="project">
      <h1>My Work</h1>
      <Container>
        <Row>
          <Col md>
            <Card className="crdProject" style={{ color: "#000" }}>
              <Card.Body>
                <a href="https://github.com/calihuddleston/park-me">
                  <Card.Img src="./Assets/img/parkme.png" alt="car" />
                </a>
                <Card.Title>Park Me</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md>
            <Card className="crdProject" style={{ color: "#000" }}>
              <Card.Body>
                <Card.Img src="./Assets/img/search.png" />
                <a
                  href="https://github.com/shannie14/We-Boot"
                  alt="search by name or github"
                ></a>
                <Row>
                  <Card.Img src="./Assets/img/homepage.png" />
                  <a
                    href="https://github.com/shannie14/We-Boot"
                    alt="a list of github pages"
                  ></a>
                  <Card.Title>WeBoot</Card.Title>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md>
            <Card className="crdProject" style={{ color: "#000" }}>
              <Card.Body>
                <a href="https://github.com/bussudo/mvc.techblog">
                  <Card.Img src="./Assets/img/mvctechblog.png" alt="techblog" />
                </a>
                <Card.Title>Tech Blog</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md>
            <Card className="crdProject" style={{ color: "#000" }}>
              <Card.Body>
                <Card.Img src="./Assets/img/PWATextEditor.png" />
                <Row>
                  <a
                    href="https://github.com/bussudo/PWATextEditor"
                    alt="text editor"
                  ></a>
                  <Card.Title>PWA Text Editor</Card.Title>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md>
            <Card className="crdProject" style={{ color: "#000" }}>
              <Card.Body>
                <a href="https://github.com/bussudo/sqlemployeetracker">
                  <Card.Img src="./Assets/img/SQLEmpTrck.png" alt="database" />
                </a>
                <Card.Title>SQL Employee Tracker</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md>
            <Card className="crdProject" style={{ color: "#000" }}>
              <Card.Body>
                <Card.Img src="./Assets/img/RMwireframe.png" />
                <a
                  href="https://github.com/Putridjungle602/Recycle-Me/RMwireframe.png"
                  alt="recycling app"
                ></a>
                <Card.Title>Recycle Me</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
