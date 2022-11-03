import React from "react";
import { Row, Container, Col } from "react-bootstrap";
// import { CDBFooter, CDBBtn, CDBBox, CDBIcon } from "cdbreact";

export const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener, noreferrer");
  if (newWindow) newWindow.opener = null;
};

// export default function footer() {
//   return (
//     <Container className="footer">
//       <Row>
//         <Col display="flex" alignItems="center">
//           <a href="/" className="d-flex align-items-center p-0 text-dark">
//             <img alt="logo" />
//             <span className="ml-4 h5 mb-0 font-weight-bold">Devwares</span>
//           </a>
//           <small className="ml-2">
//             &copy; Devwares, 2022. All rights reserved.
//           </small>
//         </Col>
//         <Col display="flex">
//           <Button flat color="dark" className="p-2">
//             <icon fab icon="facebook-f" />
//           </Button>
//           <Button flat color="dark" className="mx-3 p-2">
//             <icon fab icon="twitter" />
//           </Button>
//           <Button flat color="dark" className="p-2">
//             <icon fab icon="instagram" />
//           </Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

export default function footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col sm md>
          <a href="https://github.com/bussudo/">
            <img
              className="imageFooter"
              src="./Assets/img/github.png"
              alt="github icon"
            />
          </a>
        </Col>
        <Col sm md>
          <a href="https://www.linkedin.com/in/donnabussure">
            <img
              className="imageFooter"
              src="./Assets/img/linkedIn.png"
              alt="LinkedIn icon"
            />
          </a>
        </Col>
        <Col sm md>
          <a href="https://stackoverflow.com/users/19148306/bussudo">
            <img
              className="imageFooter"
              src="./Assets/img/stackoverflow.png"
              alt="StackOverflow icon"
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
