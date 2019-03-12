import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { NavLink, Route } from "react-router-dom";
import ArticleFeed from "./ArticleFeed";
import styled from "styled-components";
import { Home } from "styled-icons/boxicons-regular/Home";
import { Search } from "styled-icons/boxicons-regular/Search";
import { Categories } from "styled-icons/boxicons-solid/Categories";
import { UserDetail } from "styled-icons/boxicons-solid/UserDetail";
import { getData } from "../actions";
import UserProfile from "./UserProfile";
import UserCategories from "./UserCategories";

const UserBlack = styled(UserDetail)`
  color: #000;
  height: 30px;
  width: 30px;
`;

const SearchBlack = styled(Search)`
  color: #000;
  height: 30px;
  width: 30px;
`;

const HomeBlack = styled(Home)`
  color: #000;
  height: 30px;
  width: 30px;
`;

const CategoriesBlack = styled(Categories)`
  color: #000;
  height: 30px;
  width: 30px;
`;

class UserHome extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    if (this.props.fetchingArticles) {
      return <Loader type="TailSpin" color="blue" height={80} width={80} />;
    }
    return (
      <div className="main">
        <div className="navbar">
          <ul>
            <li>
              <NavLink exact to="/home" activeClassName="active">
                <HomeBlack /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories" activeClassName="active">
                <CategoriesBlack /> Categories
              </NavLink>
            </li>
            <li>
              <NavLink to="/search" activeClassName="active">
                <SearchBlack /> Search
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" activeClassName="active">
                <UserBlack /> Profile
              </NavLink>
            </li>
          </ul>
        </div>
        <Route
          exact
          path="/home"
          render={props => (
            <ArticleFeed {...props} articles={this.props.articles} />
          )}
        />
        <Route exact path="/categories" component={UserCategories} />
        <Route exact path="/profile" componet={UserProfile} />
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
