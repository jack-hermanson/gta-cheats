import React from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Container,
  CardText,
  CardTitle,
} from "reactstrap";
import { StandardCard } from "./components/shared/Card/StandardCard";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <StandardCard
              title="Clean Code"
              paragraph="A Handbook of Agile Software Craftsmanship"
            />
          </Col>
          <Col xs={12} lg={6}>
            <StandardCard title="Text Entry">
              <p>Test</p>
            </StandardCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
