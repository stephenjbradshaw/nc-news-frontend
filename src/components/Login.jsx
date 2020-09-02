import React from "react";
import { UserContext } from "../UserContext";

const Login = () => {
  return (
    <UserContext.Consumer>
      {({ user, toggleLogin }) => (
        <p>
          {user ? `Logged in as: ${user} ` : "You are not logged in "}
          <button onClick={toggleLogin}>{user ? "Log out" : "Log in"}</button>
        </p>
      )}
    </UserContext.Consumer>
  );
};

export default Login;
