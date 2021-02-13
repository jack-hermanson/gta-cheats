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
      searchText: "",
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
                  className="bg-dark btn text-white border-white btn-outline-secondary"
                  type="button"
                  onClick={() => console.log("clear")}
                >
                  &times;
                </button>
              </div>
            </InputGroup>
          </FormGroup>
        </Form>
      </StandardCard>
    );
  }
}
