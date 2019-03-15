import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import styled from "styled-components";
import { Pin } from "styled-icons/boxicons-solid/Pin";
import { addStudy } from "../actions";

const PinRed = styled(Pin)`
  color: red;
  height: 30px;
  width: 30px;
  transform: rotate(-20deg);
`;

class AddStudyForm extends React.Component {
  state = {
    study: {
      title: "",
      cover_page: "whatever a coverpage is",
      link: "",
      user_id: "",
      categories_id: ""
    }
  };

  changeHandler = e => {
    this.setState({
      study: {
        ...this.state.study,
        [e.target.name]: e.target.value,
        user_id: this.props.id
      }
    });
  };

  addStudy = e => {
    e.preventDefault();
    console.log("FORM STATE:", this.state.study);

    this.props.addStudy(this.state.study);
    this.props.history.push("/home");
    this.setState({
      study: {
        title: "testing",
        cover_page: "whatever a coverpage is",
        link: "",
        user_id: this.props.id,
        categories_id: ""
      }
    });
  };

  render() {
    return (
      <div className="main">
        <div className="add-study-form">
          <form onSubmit={this.addStudy}>
            <h2>
              <PinRed /> Update a Pin
            </h2>

            <input
              type="number"
              name="categories_id"
              placeholder="Board Name (aka category)"
              onChange={this.changeHandler}
              value={this.state.study.categories_id}
              required
            />

            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={this.changeHandler}
              value={this.state.study.title}
              required
            />
            <input
              type="url"
              name="link"
              placeholder="Link"
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
