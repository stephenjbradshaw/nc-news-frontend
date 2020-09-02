import React from "react";
import Nav from "./Nav";
import Login from "./Login";

const Header = () => {
  return (
    <header>
      <Login />
      <h1>Northcoders News</h1>
      <Nav />
    </header>
  );
};

export default Header;
