import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Alert, Breadcrumb, Card } from "react-bootstrap";

const App = () => <PortfolioContainer />;

function contactButton() {
  return (
    <div className="contactButton">
      <header className="App-header">
        <Card>
          <Card.Img />
          <Card.Body>
            <Card.Title>Message</Card.Title>
          </Card.Body>
        </Card>
        <Button>Submit</Button>
      </header>
    </div>
  );
}

export default App;
