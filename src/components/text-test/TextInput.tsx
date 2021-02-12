import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { StandardCard } from "../shared/Card/StandardCard";

interface Props {}

export const TextInput: React.FC<Props> = (props: Props) => {
  return (
    <StandardCard title="Text Entry">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          alert("submitted");
        }}
      >
        <FormGroup>
          <Label>Test</Label>
          <Input placeholder="Enter something..." type="text" />
        </FormGroup>
        <FormGroup>
          <Button color="primary">Submit</Button>
        </FormGroup>
      </Form>
    </StandardCard>
  );
};
