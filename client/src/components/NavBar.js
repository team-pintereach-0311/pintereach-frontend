import React from "react";
import styled from "styled-components";
import { Route, NavLink } from "react-router-dom";
import { UserDetail } from "styled-icons/boxicons-solid/UserDetail";
import { Search } from "styled-icons/boxicons-regular/Search";
import { Home } from "styled-icons/boxicons-regular/Home";
import { Categories } from "styled-icons/boxicons-solid/Categories";
import UserProfile from "./UserProfile";

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

const NavBar = props => {
  return (
    <div className="navbar">
      <li>
        <NavLink activeClassName="active" exact to="/home">
          <HomeBlack />
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" exact to="/categories">
          <CategoriesBlack />
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" exact to="/search">
          <SearchBlack />
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" exact to="/user">
          <UserBlack />
        </NavLink>
      </li>
    </div>
  );
};

export default NavBar;
