import React from "react";
import downArrow from "../img/DownArrow.svg";
import upArrow from "../img/UpArrow.svg";
import { UserContext } from "../UserContext";

const VoteButton = (props) => {
  const { kind, updateVoteOptimistic } = props;
  return (
    <>
      <UserContext.Consumer>
        {({ user }) => {
          return (
            <input
              type="image"
              src={kind === "up" ? upArrow : downArrow}
              width="20"
              height="20"
              aria-label={kind === "up" ? "upvote" : "downvote"}
              disabled={!user}
              onClick={(event) =>
                updateVoteOptimistic(kind === "up" ? "up" : "down")
              }
            />
          );
        }}
      </UserContext.Consumer>
    </>
  );
};

export default VoteButton;
