import { stringify } from "querystring";
import React, { useState, Component, ChangeEvent } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
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
    this.setState({ searchText: "" });
  }

  props: Props;

  render() {
    return (
      <StandardCard title="Text Entry">
        <Form onSubmit={(e) => e.preventDefault()}>
          <FormGroup>
            <Label>{this.props.label}</Label>
            <Input
              onChange={this.props.onSearchTextChange}
              placeholder="Enter something..."
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Button color="primary">Submit</Button>
          </FormGroup>
        </Form>
      </StandardCard>
    );
  }
}
