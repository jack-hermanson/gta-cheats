import { Component, ChangeEvent } from "react";
import { Form, FormGroup, Label, Input, InputGroup } from "reactstrap";
import { StandardCard } from "../shared/Card/StandardCard";

interface Props {
  label: string;
  onSearchTextChange: (event: ChangeEvent<HTMLInputElement>) => any;
}

interface State {
  searchText: string;
}

export class SearchCard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.props = props;

    this.state = {
      searchText: "test",
    };
  }

  props: Props;

  change = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchText: e.target.value,
    });
    this.props.onSearchTextChange(e);
  };

  render() {
    return (
      <StandardCard title="Text Entry">
        <Form onSubmit={(e) => e.preventDefault()}>
          <FormGroup className="mb-2">
            <Label>{this.props.label}</Label>
            <InputGroup>
              <Input
                placeholder="Enter something..."
                type="text"
                className="border-white"
                value={this.state.searchText}
                onChange={(e) => this.change(e)}
              />
              <div className="input-group-append">
                <button
                  className="btn text-light border-white btn-outline-secondary"
                  type="button"
                  onClick={() => console.log("clear")}
                >
                  Clear
                </button>
              </div>
            </InputGroup>
          </FormGroup>
        </Form>
      </StandardCard>
    );
  }
}
