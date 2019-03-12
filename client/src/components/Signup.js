import React from "react";
import { Link } from "react-router-dom";
import "../styles/Signup.css";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { signup } from "../actions";

class Signup extends React.Component {
  state = {
    signupCredentials: {
      email: "",
      username: "",
      password: ""
    }
  };

  changeHandler = e => {
    this.setState({
      signupCredentials: {
        ...this.state.signupCredentials,
        [e.target.name]: e.target.value
      }
    });
  };

  signup = e => {
    e.preventDefault();
    this.props
      .signup(this.state.signupCredentials)
      .then(() => this.props.history.push("/home"));
  };

  render() {
    return (
      <div className="step-1">
        <section className="form-login">
          <h1>Pintereach</h1>
          <h2>
            Sign up to connect with the world's most efficient researchers
          </h2>
          <form onSubmit={this.signup}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.signupCredentials.email}
              onChange={this.changeHandler}
              required
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.signupCredentials.username}
              onChange={this.changeHandler}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.signupCredentials.password}
              onChange={this.changeHandler}
              required
            />
            <button>
              {this.props.signingUp ? (
                <Loader type="TailSpin" color="red" height={18} width={18} />
              ) : (
                "Sign up"
              )}
            </button>
          </form>
        </section>
        <section className="account-true">
          Already have an account? <Link to="/login">Log in</Link>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ error, signingUp }) => ({
  error,
  signingUp
});

export default connect(
  mapStateToProps,
  { signup }
)(Signup);
