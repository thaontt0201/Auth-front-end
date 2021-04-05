import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Signup = () => {
  return (
    <>
      <h1>Signup</h1>
      <Form>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Enter email" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Enter password" />
        </FormGroup>
        <Button color="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Signup;
