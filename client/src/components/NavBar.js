import React from "react";
import { Route, NavLink } from "react-router-dom";
import { Home } from "styled-icons/boxicons-regular/Home";
import { Search } from "styled-icons/boxicons-regular/Search";
import { Categories } from "styled-icons/boxicons-solid/Categories";
import { UserDetail } from "styled-icons/boxicons-solid/UserDetail";
import { Notifications } from "styled-icons/material/Notifications";
import styled from "styled-components";

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
const NotificationBlack = styled(Notifications)`
  color: darkgray;
  height: 30px;
  width: 30px;
`;

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink exact to="/home" activeClassName="activeNavBtn">
        <HomeBlack />
      </NavLink>

      <NavLink to="/boards" activeClassName="activeNavBtn">
        <CategoriesBlack />
      </NavLink>

      <NavLink to="/notifications" activeClassName="activeNavBtn">
        <NotificationBlack />
      </NavLink>

      <NavLink to="/profile" activeClassName="activeNavBtn">
        <UserBlack /> @example
      </NavLink>
    </div>
  );
};

export default NavBar;
