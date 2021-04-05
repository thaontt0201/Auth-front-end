import React from "react";
import { Form, Button, FormGroup, Label, Input } from "reactstrap";

const Login = () => {
  return (
    <>
      <h1>Login</h1>
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

export default Login;
