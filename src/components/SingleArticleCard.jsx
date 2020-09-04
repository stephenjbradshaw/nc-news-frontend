import React from "react";
import Voter from "./Voter";
import { formatTimeString } from "../utils/time";

const ArticleCard = ({ article }) => {
  const timeDifference = Date.now() - new Date(article.created_at);
  const timeString = formatTimeString(timeDifference);

  return (
    <article>
      <p>
        {article.topic} <br /> Posted by {article.author} {timeString}
      </p>
      <h2>{article.title}</h2>

      <p>{article.body}</p>

      <Voter kind={"article"} id={article.article_id} votes={article.votes} />

      <p>{article.comment_count} comments</p>
    </article>
  );
};

export default ArticleCard;
