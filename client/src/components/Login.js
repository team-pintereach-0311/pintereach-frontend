import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  changeHandler = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div className="step-2">
        <section className="form-login">
          <h1>Pintereach</h1>
          <form onSubmit={this.login}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.credentials.username}
              onChange={this.changeHandler}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.credentials.password}
              onChange={this.changeHandler}
              required
            />
            <button>Log in</button>
          </form>
        </section>
        <section className="account-false">
          No account? <Link to="/signup">Sign up</Link>
        </section>
      </div>
    );
  }
}

export default Login;
