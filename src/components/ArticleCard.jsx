import React from "react";
import Voter from "./Voter";
import { Link } from "@reach/router";
import { formatTimeString } from "../utils/time";

const ArticleCard = ({ article, isListItem }) => {
  const timeDifference = Date.now() - new Date(article.created_at);
  const timeString = formatTimeString(timeDifference);

  return (
    <>
      <p>
        {article.topic} | Posted by {article.author} {timeString}
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
    </>
  );
};

export default ArticleCard;
