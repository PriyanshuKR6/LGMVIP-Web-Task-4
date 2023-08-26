import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { getUsers } from "../config/api";

const Nav = styled(AppBar)`
  background: rgba(255, 255, 255, 0.3);
  height: 12vh;
  justify-content: center;
  padding: 0 4vw;
  position: relative;
  box-shadow: none;
`;

const InnerNav = styled(Toolbar)`
  justify-content: space-between;
`;

const Logo = styled("h1")`
  color: blue;
  font-size: 2.5rem;
  font-family: monospace;
  letter-spacing:-0.05em;
`;

const GetButton = styled("button")`
  height: 50px;
  width: 140px;
  border-radius: 7px;
  font-size: 1.2rem;
  background: crimson;
  border: none;
  outline: none;
  color: white;
  font-family: sans-serif;
  box-shadow:3px 3px 5px rgba(0,0,0,0.2);
  cursor: pointer;
  &:hover{
    transform:scale(1.1);
    background:red;
  }
`;

const Navbar = ({ setUsers, setVisibility, setLoading }) => {
  function GetUsers() {
    setLoading(true);

    setTimeout(() => {
      getUsers(setUsers);
      setLoading(false);
      setVisibility(true);
    }, 1500);
  }

  return (
    <Nav>
      <InnerNav>
        <Logo> Priyanshu </Logo>
        <GetButton onClick={GetUsers}> Get Users </GetButton>
      </InnerNav>
    </Nav>
  );
};

export default Navbar;
