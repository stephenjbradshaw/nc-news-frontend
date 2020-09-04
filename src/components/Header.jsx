import React from "react";
import { StyledNav } from "../styled/lib";
import { StyledLogin, AppTitle } from "../styled/lib";

const Header = ({ className }) => {
  return (
    <header className={className}>
      <StyledLogin />
      <AppTitle>Northcoders News</AppTitle>
      <StyledNav />
    </header>
  );
};

export default Header;
