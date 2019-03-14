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
  color: red;
  height: 30px;
  width: 30px;
  padding-right: 10px;
  padding-bottom: 5px;
`;

class Boards extends React.Component {
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
          <h2>
            <CategoriesBlack />
            Create a Board
          </h2>

          <form onSubmit={this.addStudy}>
            <div className="top">
              <input
                type="test"
                name="category"
                placeholder="Board Name"
                onChange={this.changeHandler}
                value={this.state.study.category}
                required
              />
              <div className="radios">
                <input type="radio" name="status" value="private" /> Private
                (only visible to you)
                <input type="radio" name="status" value="public" /> Public
                (visible to everyone)
              </div>
              <button>
                {this.props.addingStudy ? (
                  <Loader
                    type="TailSpin"
                    color="white"
                    height={18}
                    width={18}
                  />
                ) : (
                  "Add Board"
                )}
              </button>
            </div>
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
)(Boards);
