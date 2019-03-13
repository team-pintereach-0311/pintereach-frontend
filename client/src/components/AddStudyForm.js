import React from "react";

import Loader from "react-loader-spinner";
import { connect } from "react-redux";

import { addStudy } from "../actions";

class AddStudyForm extends React.Component {
  state = {
    study: {
      link: "",
      user_id: "",
      title: "",
      cover_page: ""
    }
  };

  changeHandler = e => {
    this.setState({
      study: {
        [e.target.name]: e.target.value,
        user_id: this.props.id,
        title: "test title",
        cover_page: "test cover page"
      }
    });
  };

  addStudy = e => {
    e.preventDefault();
    console.log("FORM STATE:", this.state.study);
    this.props.addStudy(this.state.study);
    // .then(() => {
    //   this.props.history.push("/home");
    // });
    this.setState({
      study: {
        link: "",
        id: ""
      }
    });
  };

  render() {
    return (
      <div className="add-study-form">
        <h2>Add New Study</h2>
        <form onSubmit={this.addStudy}>
          <input
            type="url"
            name="link"
            placeholder="study link"
            onChange={this.changeHandler}
            value={this.state.study.link}
          />

          <button>
            {this.props.addingStudy ? (
              <Loader type="TailSpin" color="white" height={18} width={18} />
            ) : (
              "Add study"
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ addingStudy, id }) => ({
  addingStudy,
  id
});

export default connect(
  mapStateToProps,
  { addStudy }
)(AddStudyForm);
