import React from "react";
import { StyledVoter } from "../styled/lib";
import { formatTimeString } from "../utils/time";
import { UserContext } from "../UserContext";
import { StyledDeleteCommentButton } from "../styled/lib";

const CommentCard = ({ comment, deleteCommentOptimistic, className }) => {
  const timeDifference = Date.now() - new Date(comment.created_at);
  const timeString = formatTimeString(timeDifference);

  return (
    <li className={className}>
      <UserContext.Consumer>
        {({ user }) => {
          if (user === comment.author)
            return (
              <StyledDeleteCommentButton
                as="button"
                onClick={(event) => deleteCommentOptimistic(comment.comment_id)}
              >
                Delete
              </StyledDeleteCommentButton>
            );
        }}
      </UserContext.Consumer>
      <p>
        Posted by {comment.author} {timeString}
      </p>
      <p>{comment.body}</p>
      <StyledVoter
        kind={"comment"}
        id={comment.comment_id}
        votes={comment.votes}
      />
    </li>
  );
};

export default CommentCard;
