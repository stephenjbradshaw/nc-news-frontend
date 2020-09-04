import React from "react";
import { UserContext } from "../UserContext";
import { StyledButton } from "../styled/lib";

const Login = ({ className }) => {
  return (
    <UserContext.Consumer>
      {({ user, toggleLogin }) => (
        <p className={className}>
          {user ? `Logged in as: ${user} ` : "You are not logged in "}
          <StyledButton as="button" onClick={toggleLogin}>
            {user ? "Log out" : "Log in"}
          </StyledButton>
        </p>
      )}
    </UserContext.Consumer>
  );
};

export default Login;
