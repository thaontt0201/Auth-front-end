import React, { useState } from "react";
import { Form, Button, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/login", { email, password })
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        setEmail("");
        setPassword("");
        console.log(window.localStorage.getItem("token"));
        history.push("/");
      });
  };

  return (
    <>
      <h1>Login</h1>
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

export default Login;
