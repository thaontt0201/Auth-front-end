import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";

const Signup = (props) => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/signup", { email, password })
      .then((res) => {
        setEmail("");
        setPassword("");
        console.log(res.data);
        history.push("/signin");
      });
  };
  return (
    <>
      <h1>Signup</h1>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </FormGroup>
        <Button color="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Signup;
