import { Row, Col, Container } from "reactstrap";
import { Cheats } from "./components/cheats/Cheats";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={12}>
            <Cheats />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
