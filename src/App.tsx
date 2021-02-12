import {
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from "reactstrap";
import { StandardCard } from "./components/shared/Card/StandardCard";
import { TextInput } from "./components/text-test/TextInput";

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
            <TextInput />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
