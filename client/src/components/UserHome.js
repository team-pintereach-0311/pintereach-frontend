import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import { PlusCircle } from "styled-icons/boxicons-regular/PlusCircle";
import { deleteArticle, getData } from "../actions";
import ArticleFeed from "./ArticleFeed";

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
        <Route
          exact
          path="/home"
          render={props => (
            <div className="home">
              <h2>Your Pins</h2>
              <ArticleFeed
                {...props}
                articles={this.props.articles}
                deleteArticle={this.props.deleteArticle}
              />
              <Link to="/add-study-form">
                <button>
                  <AddWhite />
                  Add a Pin
                </button>
              </Link>
            </div>
          )}
        />
        <div className="feed">
          <h2>Pin Feed</h2>
          <Route
            exact
            path="/home"
            render={props => (
              <div className="home">
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
  id
}) => ({
  articles,
  fetchingArticles,
  message,
  deletingArticle,
  id
});

export default connect(
  mapStateToProps,
  { getData, deleteArticle }
)(UserHome);
