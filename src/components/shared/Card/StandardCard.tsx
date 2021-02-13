import { Component } from "react";
import { Card, CardBody } from "reactstrap";
import { CardHeader } from "./CardHeader";
import { CardTextBody } from "./CardTextBody";
import React from "react";

interface Props {
  title: string;
  paragraph?: string;
  children?: JSX.Element;
  className?: string;
}

export class StandardCard extends Component<Props> {
  props: Props;

  constructor(props: Props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Card className={this.props.className}>
        <CardHeader title={this.props.title}></CardHeader>
        <CardBody>
          {this.props.paragraph !== undefined && (
            <CardTextBody paragraph={this.props.paragraph} />
          )}
          {this.props.children}
        </CardBody>
      </Card>
    );
  }
}
