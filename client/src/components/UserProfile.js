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
      <div className="profile">
        <h2>Profile</h2>
        <form>
          <input type="file" name="fileToUpload" id="fileToUpload" />
          <input type="submit" value="Upload Image" name="submit" />
        </form>
        <button onClick={this.logout}>
          {this.props.loggingOut ? (
            <Loader type="TailSpin" color="white" height={18} width={18} />
          ) : (
            "Log out"
          )}
        </button>
      </div>
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
