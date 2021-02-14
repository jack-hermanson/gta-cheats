import { Component, ChangeEvent, MouseEvent } from "react";
import { Form, FormGroup, Label, Input, InputGroup } from "reactstrap";
import { StandardCard } from "../Card/StandardCard";
import { FaTimes } from "react-icons/fa";

interface Props {
  label: string;
  cardTitle: string;
  onSearchTextChange: (event: ChangeEvent<HTMLInputElement>) => any;
  onClearButtonClick: (event: MouseEvent<HTMLButtonElement>) => any;
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

  clear = (e: MouseEvent<HTMLButtonElement>) => {
    this.setState({
      searchText: "",
    });
    this.props.onClearButtonClick(e);
    document.getElementById("search-text")?.focus();
  };

  render() {
    return (
      <StandardCard title={this.props.cardTitle}>
        <Form onSubmit={(e) => e.preventDefault()}>
          <FormGroup className="mb-2">
            <Label>{this.props.label}</Label>
            <InputGroup>
              <Input
                autoFocus
                id="search-text"
                placeholder="Enter something..."
                type="text"
                className="border-white form-control-lg"
                value={this.state.searchText}
                onChange={(e) => this.change(e)}
              />
              <div className="input-group-append">
                <button
                  className="bg-dark btn text-white border-white btn-outline-secondary"
                  type="button"
                  onClick={(e) => this.clear(e)}
                >
                  <FaTimes />
                </button>
              </div>
            </InputGroup>
          </FormGroup>
        </Form>
      </StandardCard>
    );
  }
}
