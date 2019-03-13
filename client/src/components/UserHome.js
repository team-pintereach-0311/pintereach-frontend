import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { NavLink, Route, Link } from "react-router-dom";
import ArticleFeed from "./ArticleFeed";
import styled from "styled-components";
import { Home } from "styled-icons/boxicons-regular/Home";
import { Search } from "styled-icons/boxicons-regular/Search";
import { Categories } from "styled-icons/boxicons-solid/Categories";
import { UserDetail } from "styled-icons/boxicons-solid/UserDetail";
import { getData, deleteArticle } from "../actions";
import UserProfile from "./UserProfile";
import UserCategories from "./UserCategories";
import UserPin from "./UserPin";
import { Notification } from "styled-icons/boxicons-regular/Notification";
import { Pin } from "styled-icons/boxicons-solid/Pin";

const UserBlack = styled(UserDetail)`
  color: darkgray;
  height: 30px;
  width: 30px;
`;

const SearchBlack = styled(Search)`
  color: darkgray;
  height: 30px;
  width: 30px;
`;

const HomeBlack = styled(Home)`
  color: darkgray;
  height: 30px;
  width: 30px;
`;

const CategoriesBlack = styled(Categories)`
  color: darkgray;
  height: 30px;
  width: 30px;
`;
const NotificationBlack = styled(Notification)`
  color: darkgray;
  height: 30px;
  width: 30px;
`;

const PinRed = styled(Pin)`
  color: red;
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
    this.props.getData();
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
              <NavLink to="/notifications" activeClassName="active">
                <NotificationBlack /> Notifications
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
            <div className="home">
              <Link to="/pin">
                <button>
                  <PinRed />
                  Pin a link
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
        <Route exact path="/pin" component={UserPin} />
        <Route exact path="/categories" component={UserCategories} />
        <Route exact path="/profile" component={UserProfile} />
      </div>
    );
  }
}

const mapStateToProps = ({
  articles,
  fetchingArticles,
  message,
  deletingArticle
}) => ({
  articles,
  fetchingArticles,
  message,
  deletingArticle
});

export default connect(
  mapStateToProps,
  { getData, deleteArticle }
)(UserHome);
