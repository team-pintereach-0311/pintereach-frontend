import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Home } from "styled-icons/boxicons-regular/Home";
import { Categories } from "styled-icons/boxicons-solid/Categories";
import { Pin } from "styled-icons/boxicons-solid/Pin";
import { UserDetail } from "styled-icons/boxicons-solid/UserDetail";

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

const HomeBlack = styled(Home)`
  color: black;
  height: 30px;
  width: 30px;
`;

const CategoriesBlack = styled(Categories)`
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

      <NavLink exact to="/add-board" activeClassName="activeNavBtn">
        <CategoriesBlack />
      </NavLink>

      <NavLink exact to="/add-pin" activeClassName="activeNavBtn">
        <PinBlack />
      </NavLink>

      <NavLink to="/profile" activeClassName="activeNavBtn">
        <UserBlack />
      </NavLink>
    </div>
  );
};

export default NavBar;
