import React, { Component } from "react";
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";

interface Props {
  cheat: { name: string; code: string };
}

export class Cheat extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <ListGroupItem className="px-0">
        <ListGroupItemHeading>{this.props.cheat.name}</ListGroupItemHeading>
        <ListGroupItemText className="mb-0">
          {this.props.cheat.name}
        </ListGroupItemText>
      </ListGroupItem>
    );
  }

  props: Props;
}
