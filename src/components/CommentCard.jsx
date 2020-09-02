import React from "react";
import Voter from "./Voter";
import { formatTimeString } from "../utils/time";

const CommentCard = ({ comment }) => {
  const timeDifference = Date.now() - new Date(comment.created_at);
  const timeString = formatTimeString(timeDifference);

  return (
    <>
      <p>
        Posted by {comment.author} {timeString}
      </p>
      <p>{comment.body}</p>
      <Voter kind={"comment"} id={comment.comment_id} votes={comment.votes} />
    </>
  );
};

export default CommentCard;
