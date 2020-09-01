import React from "react";
import Voter from "./Voter";
import { Link } from "@reach/router";

const ArticleCard = ({ article, isListItem }) => {
  return (
    <li>
      <p>
        {article.topic} | Posted by {article.author} ago
      </p>
      {isListItem ? (
        <Link to={`/article/${article.article_id}`}>
          <h2>{article.title}</h2>
        </Link>
      ) : (
        <h2>{article.title}</h2>
      )}

      <p>{article.body}</p>
      <p>{article.comment_count} comments</p>

      <Voter kind={"article"} id={article.article_id} votes={article.votes} />
    </li>
  );
};

export default ArticleCard;
