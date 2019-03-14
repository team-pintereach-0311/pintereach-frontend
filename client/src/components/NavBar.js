import React from "react";
import { Route, NavLink } from "react-router-dom";
import { Home } from "styled-icons/boxicons-regular/Home";
import { Search } from "styled-icons/boxicons-regular/Search";
import { Categories } from "styled-icons/boxicons-solid/Categories";
import { UserDetail } from "styled-icons/boxicons-solid/UserDetail";
import { Notifications } from "styled-icons/material/Notifications";
import styled from "styled-components";

import { Pin } from "styled-icons/boxicons-solid/Pin";

const PinRed = styled(Pin)`
  color: red;
  height: 30px;
  width: 30px;
  transform: rotate(-20deg);
`;

const PinBlack = styled(Pin)`
  color: black;
  height: 30px;
  width: 30px;
  transform: rotate(-20deg);
`;

const UserBlack = styled(UserDetail)`
  color: black;
  height: 30px;
  width: 30px;
`;

const SearchBlack = styled(Search)`
  color: black;
  height: 30px;
  width: 30px;
`;

const HomeBlack = styled(Home)`
  color: black;
  height: 30px;
  width: 30px;
`;

const CategoriesBlack = styled(Categories)`
  color: black;
  height: 15px;
  width: 15px;
`;
const NotificationBlack = styled(Notifications)`
  color: black;
  height: 30px;
  width: 30px;
`;

const NavBar = () => {
  return (
    <div className="navbar">
      <h1>
        <PinRed />
        Pintereach
      </h1>
      <NavLink exact to="/home" activeClassName="activeNavBtn">
        <HomeBlack />
      </NavLink>
      <NavLink exact to="/add-study-form" activeClassName="activeNavBtn">
        <PinBlack />
        <CategoriesBlack />
      </NavLink>

      <NavLink to="/profile" activeClassName="activeNavBtn">
        <UserBlack />
      </NavLink>
    </div>
  );
};

export default NavBar;
