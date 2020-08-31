import React from "react";
import Voter from "./Voter";

const ArticleCard = ({ article }) => {
  return (
    <li>
      <p>
        {article.topic} | Posted by {article.author} {article.created_at} ago
      </p>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <p>{article.comment_count} comments</p>

      <Voter votes={article.votes} />
    </li>
  );
};

export default ArticleCard;
