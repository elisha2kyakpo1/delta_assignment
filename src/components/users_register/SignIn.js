import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import './Users.css'

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
}

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
  }

  return (
    <section onSubmit={handleSubmit} className="login">
      <div className="inner-log">
        <div className="container">
          <div className="inner">
            <h1>Sign In</h1>
          </div>
          <Form className="form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="input"
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="input"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
            <Button className="submit" variant="primary" type="submit">
              Submit
            </Button>
            <div className="signup-div d-flex">
              <p>Don't have account?</p>
              <Card.Link href="/sign_up" className="ml-2">Sign Up</Card.Link>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;