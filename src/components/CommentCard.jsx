import React from "react";
import Voter from "./Voter";

const CommentCard = ({ comment }) => {
  return (
    <>
      <p>Posted by {comment.author} ago</p>
      <p>{comment.body}</p>
      <Voter kind={"comment"} id={comment.comment_id} votes={comment.votes} />
    </>
  );
};

export default CommentCard;
