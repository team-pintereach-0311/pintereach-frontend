import React from "react";
import { getData } from "../actions";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import ArticleFeed from "./ArticleFeed";
import NavBar from "./NavBar";
import Categories from "./Categories2";
import UserProfile from "./UserProfile";
import { Route } from "react-router-dom";

class UserHome extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    if (this.props.fetchingArticles) {
      return <Loader type="TailSpin" color="blue" height={80} width={80} />;
    }
    return (
      <div className="step-3">
        <ArticleFeed articles={this.props.articles} />
      </div>
    );
  }
}

const mapStateToProps = ({ articles, fetchingArticles }) => ({
  articles,
  fetchingArticles
});

export default connect(
  mapStateToProps,
  { getData }
)(UserHome);
