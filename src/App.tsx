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
import { SearchCard } from "./components/search/SearchCard";
import { ChangeEvent } from "react";

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
            <SearchCard
              onSearchTextChange={(event: ChangeEvent<HTMLInputElement>) => {
                console.log(event.target.value);
              }}
              label="Search for Cheat"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
