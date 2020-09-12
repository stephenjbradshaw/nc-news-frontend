import React from "react";
import { StyledCommentCard } from "../styled/lib";

const CommentsList = ({ comments, className, deleteCommentOptimistic }) => {
  return (
    <ul className={className}>
      {comments.map((comment) => {
        return (
          <StyledCommentCard
            comment={comment}
            key={comment.comment_id}
            deleteCommentOptimistic={deleteCommentOptimistic}
          />
        );
      })}
    </ul>
  );
};

export default CommentsList;
