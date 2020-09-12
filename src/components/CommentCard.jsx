import React from "react";
import Voter from "./Voter";
import { formatTimeString } from "../utils/time";
import { UserContext } from "../UserContext";

const CommentCard = ({ comment, deleteCommentOptimistic, className }) => {
  const timeDifference = Date.now() - new Date(comment.created_at);
  const timeString = formatTimeString(timeDifference);

  return (
    <li className={className}>
      <UserContext.Consumer>
        {({ user }) => {
          if (user === comment.author)
            return (
              <button
                onClick={(event) => deleteCommentOptimistic(comment.comment_id)}
              >
                Delete Comment
              </button>
            );
        }}
      </UserContext.Consumer>
      <p>
        Posted by {comment.author} {timeString}
      </p>
      <p>{comment.body}</p>
      <Voter kind={"comment"} id={comment.comment_id} votes={comment.votes} />
    </li>
  );
};

export default CommentCard;
