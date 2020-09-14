import React from "react";
import { StyledButton } from "../styled/lib";

const CommentLogin = ({ toggleLogin, className }) => {
  return (
    <p className={className}>
      Please{" "}
      <StyledButton as="button" onClick={toggleLogin}>
        Log in
      </StyledButton>{" "}
      to comment
    </p>
  );
};

export default CommentLogin;
