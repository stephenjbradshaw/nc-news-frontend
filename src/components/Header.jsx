import React from "react";
import { StyledNav } from "../styled/lib";
import { StyledLogin } from "../styled/lib";

const Header = ({ className }) => {
  return (
    <header className={className}>
      <StyledLogin />
      <h1>Northcoders News</h1>
      <StyledNav />
    </header>
  );
};

export default Header;
