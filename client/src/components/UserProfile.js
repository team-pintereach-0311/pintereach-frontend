import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { logout } from "../actions";

class UserProfile extends React.Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
    document.location.reload();
  };

  render() {
    return (
      <>
        <p>hello from UserProfile</p>
        <button onClick={this.logout}>
          {this.props.loggingOut ? (
            <Loader type="TailSpin" color="white" height={18} width={18} />
          ) : (
            "Log out"
          )}
        </button>
      </>
    );
  }
}

const mapStateToProps = ({ loggingOut }) => ({
  loggingOut
});

export default connect(
  mapStateToProps,
  { logout }
)(UserProfile);
