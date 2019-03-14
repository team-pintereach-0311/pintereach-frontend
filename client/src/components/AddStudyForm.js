import React from "react";

import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import styled from "styled-components";
import { Categories } from "styled-icons/boxicons-solid/Categories";
import { Pin } from "styled-icons/boxicons-solid/Pin";

import { addStudy } from "../actions";

const PinRed = styled(Pin)`
  color: red;
  height: 30px;
  width: 30px;
  transform: rotate(-20deg);
`;

const CategoriesBlack = styled(Categories)`
  color: black;
  height: 30px;
  width: 30px;
  padding-left: 10px;
  padding-bottom: 5px;
`;

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
    this.props.history.push("/home");
    this.setState({
      study: {
        link: "",
        id: "",
        pinTitle: ""
      }
    });
  };

  render() {
    return (
      <div className="main">
        <div className="add-study-form">
          <form onSubmit={this.addStudy}>
            <h2>
              <PinRed /> Add Pins to your Board
            </h2>

            <div className="board-name">
              <label>Board Name</label>
              <select name="cars">
                <option value="volvo">PHYSICS 201</option>
                <option value="saab">Politics</option>
                <option value="fiat">Mathematics</option>
                <option value="audi">Neuroscience</option>
              </select>
            </div>

            <input
              type="text"
              name="pinTitle"
              placeholder="Title"
              onChange={this.changeHandler}
              value={this.state.study.link}
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
            <input
              type="text"
              name="pinTitle"
              placeholder="Category"
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
