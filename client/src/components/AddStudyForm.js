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
      <div className="main">
        <div className="add-study-form">
          <h2>Create a Board</h2>
          <form>
            <input
              type="test"
              name="category"
              placeholder="category"
              onChange={this.changeHandler}
              value={this.state.study.category}
              required
            />
            <div className="radios">
              <input type="radio" name="status" value="private" /> Private (only
              visible to you)
              <input type="radio" name="status" value="public" /> Public
              (visible to everyone)
            </div>
          </form>
          <h2>Add Pins to your Board</h2>
          <form onSubmit={this.addStudy}>
            <input
              type="url"
              name="link"
              placeholder="pin link"
              onChange={this.changeHandler}
              value={this.state.study.link}
              required
            />

            <button>
              {this.props.addingStudy ? (
                <Loader type="TailSpin" color="white" height={18} width={18} />
              ) : (
                "Add Pin"
              )}
            </button>
          </form>
        </div>
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
