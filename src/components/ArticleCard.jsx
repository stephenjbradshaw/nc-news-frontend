import React from "react";
import Voter from "./Voter";
import { Link } from "@reach/router";
import { formatTimeString } from "../utils/time";
import { UserContext } from "../UserContext";

const ArticleCard = ({ article }) => {
  const timeDifference = Date.now() - new Date(article.created_at);
  const timeString = formatTimeString(timeDifference);

  return (
    <article>
      <p>
        {article.topic} <br /> Posted by {article.author} {timeString}
      </p>
      <Link to={`/article/${article.article_id}`}>
        <h2>{article.title}</h2>
      </Link>

      <p>{article.body}</p>

      <Voter kind={"article"} id={article.article_id} votes={article.votes} />

      <Link to={`/article/${article.article_id}`}>
        <p>{article.comment_count} comments</p>
      </Link>
    </article>
  );
};

export default ArticleCard;
