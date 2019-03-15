import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import styled from "styled-components";
import { Categories } from "styled-icons/boxicons-solid/Categories";
import { addBoard } from "../actions";

const CategoriesBlack = styled(Categories)`
  color: red;
  height: 30px;
  width: 30px;
  padding-right: 10px;
  padding-bottom: 5px;
`;

class Boards extends React.Component {
  state = {
    body: {
      name: ""
    }
  };

  changeHandler = e => {
    this.setState({
      body: {
        [e.target.name]: e.target.value
      }
    });
  };

  addBoard = e => {
    e.preventDefault();

    this.props.addBoard(this.state.body, this.props.id);
    this.props.history.push("/home");
    this.setState({
      body: {
        name: ""
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

          <form onSubmit={this.addBoard}>
            <div className="top">
              <input
                type="text"
                name="name"
                placeholder="Board Name"
                onChange={this.changeHandler}
                value={this.state.body.name}
                required
              />
              <button>
                {this.props.addingButton ? (
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

const mapStateToProps = ({ addingBoard, id }) => ({
  addingBoard,
  id
});

export default connect(
  mapStateToProps,
  { addBoard }
)(Boards);
