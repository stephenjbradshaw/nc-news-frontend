import React from "react";
import upArrow from "../img/UpArrow.svg";
import upArrowSelected from "../img/UpArrowSelected.svg";
import upArrowDisabled from "../img/UpArrowDisabled.svg";
import downArrow from "../img/DownArrow.svg";
import downArrowSelected from "../img/DownArrowSelected.svg";
import downArrowDisabled from "../img/DownArrowDisabled.svg";
import { UserContext } from "../UserContext";

const VoteButton = (props) => {
  const { kind, updateVoteOptimistic, optimisticVotes } = props;
  return (
    <>
      <UserContext.Consumer>
        {({ user }) => {
          if (kind === "up")
            return (
              <input
                type="image"
                src={
                  !user
                    ? upArrowDisabled
                    : optimisticVotes === 1
                    ? upArrowSelected
                    : upArrow
                }
                width="20"
                height="20"
                aria-label={"upvote"}
                disabled={!user}
                onClick={(event) => updateVoteOptimistic("up")}
              />
            );
          else if (kind === "down")
            return (
              <input
                type="image"
                src={
                  !user
                    ? downArrowDisabled
                    : optimisticVotes === -1
                    ? downArrowSelected
                    : downArrow
                }
                width="20"
                height="20"
                aria-label={"downvote"}
                disabled={!user}
                onClick={(event) => updateVoteOptimistic("down")}
              />
            );
        }}
      </UserContext.Consumer>
    </>
  );
};

export default VoteButton;
