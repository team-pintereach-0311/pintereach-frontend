import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import { PlusCircle } from "styled-icons/boxicons-regular/PlusCircle";
import { deleteArticle, getData } from "../actions";
import ArticleFeed from "./ArticleFeed";

import UserCategories from "./UserCategories";
import UserPin from "./UserPin";
import UserProfile from "./UserProfile";

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
        {/* <Route exact path="/categories" component={UserCategories} /> */}

        <Route
          exact
          path="/home"
          render={props => (
            <div className="home">
              <Link to="/add-study-form">
                <button>
                  <AddWhite />
                  Add a link
                </button>
              </Link>
              <ArticleFeed
                {...props}
                articles={this.props.articles}
                deleteArticle={this.props.deleteArticle}
              />
            </div>
          )}
        />
        {/* <Route path="/pin" component={UserPin} />
        
        <Route exact path="/profile" component={UserProfile} /> */}
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
