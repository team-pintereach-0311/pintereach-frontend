import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import { connect } from "react-redux";
import { login } from "../actions";
import Loader from "react-loader-spinner";

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

  login = e => {
    e.preventDefault();
    console.log(this.state.credentials);
    this.props
      .login(this.state.credentials)
      .then(() => this.props.history.push("/home"));
  };

  render() {
    return (
      <>
        <div className="step-2">
          <section className="form-entry">
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
              <section className="error-message">
                {this.props.error && <p>{this.props.error}</p>}
              </section>
              <button>
                {this.props.loggingIn ? (
                  <Loader
                    type="TailSpin"
                    color="white"
                    height={18}
                    width={18}
                  />
                ) : (
                  "Log in"
                )}
              </button>
            </form>
          </section>
          <section className="account">
            No account? <Link to="/">Sign up</Link>
          </section>
        </div>
        <footer>
          <p> &copy; 2019 Pintereach</p>
        </footer>
      </>
    );
  }
}

const mapStateToProps = ({ error, loggingIn }) => ({
  error,
  loggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
