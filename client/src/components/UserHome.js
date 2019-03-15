import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import { PlusCircle } from "styled-icons/boxicons-regular/PlusCircle";
import { deleteArticle, getData, getData2, getData3 } from "../actions";
import ArticleFeed from "./ArticleFeed";
import BoardFeed from "./BoardFeed";

const AddWhite = styled(PlusCircle)`
  color: white;
  height: 25px;
  width: 25px;
`;

class UserHome extends React.Component {
  constructor() {
    super();
    this.state = {
      showMessage: false
    };
  }

  componentDidMount() {
    this.props.getData(this.props.id);
    this.props.getData2(this.props.id);
    this.props.getData3();

    // setTimeout(() => this.setState({ showMessage: false }), 2000);
  }

  render() {
    if (this.props.fetchingArticles) {
      return (
        <div className="loader">
          <Loader type="TailSpin" color="#005995" height={40} width={40} />
        </div>
      );
    }

    if (this.state.showMessage) {
      return (
        <div className="message">
          <p>{this.props.message}</p>
        </div>
      );
    }

    return (
      <div className="main">
        <div className="feed">
          <h2>Board Feed</h2>

          <Route
            exact
            path="/home"
            render={props => (
              <div className="home2">
                <BoardFeed
                  {...props}
                  boards={this.props.boards}
                  articles={this.props.allArticles}
                />
              </div>
            )}
          />
        </div>
        <div className="side">
          <Link to="/add-board">
            <button>
              <AddWhite />
              Add Board
            </button>
          </Link>
          <Link to="/add-pin">
            <button className="last">
              <AddWhite />
              Add Pin
            </button>
          </Link>
          <Route
            exact
            path="/home"
            render={props => (
              <div className="home">
                <div className="title-block">
                  <h2>Your Boards</h2>
                  <div className="btns" />
                </div>
                <ArticleFeed
                  {...props}
                  articles={this.props.articles}
                  deleteArticle={this.props.deleteArticle}
                />
              </div>
            )}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  articles,
  fetchingArticles,
  message,
  deletingArticle,
  id,
  boards,
  allArticles
}) => ({
  articles,
  fetchingArticles,
  message,
  deletingArticle,
  id,
  boards,
  allArticles
});

export default connect(
  mapStateToProps,
  { getData, deleteArticle, getData2, getData3 }
)(UserHome);
