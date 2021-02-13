import { Row, Col, Container } from "reactstrap";
import { SearchCard } from "./components/search/SearchCard";
import { ChangeEvent } from "react";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={12}>
            <SearchCard
              onSearchTextChange={(event: ChangeEvent<HTMLInputElement>) => {
                console.log(event);
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
