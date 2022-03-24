import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

const SignIn = ({ setToken }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    setToken(token);
  }

  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      <div className="header pl-5">
        Login
      </div>
      <div className="box">

        <div className="input-group">
          <input onChange={e => setEmail(e.target.value)}
            type="email"
            name="email"
            className="login-input form-control"
            placeholder="enter your email"/>
        </div>

        <div className="input-group mt-2">
          <input
            onChange={e => setPassword(e.target.value)}
            type="password"
            name="password"
            className="login-input form-control"
            placeholder="enter your Password"/>
        </div>

        <button
          type="button"
          className="btn btn-primary mt-2"
        >
        Login
        </button>
      </div>
    </form>
  );
}

SignIn.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default SignIn;