import React from "react";
import { StyledButton } from "../styled/lib";

const CommentLogin = ({ toggleLogin }) => {
  return (
    <p>
      Please{" "}
      <StyledButton as="button" onClick={toggleLogin}>
        log in
      </StyledButton>{" "}
      to comment
    </p>
  );
};

export default CommentLogin;
