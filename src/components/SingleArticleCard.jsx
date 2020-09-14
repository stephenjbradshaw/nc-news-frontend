import React from "react";
import { StyledVoter } from "../styled/lib";
import { formatTimeString } from "../utils/time";
import { capitalizeFirstLetter } from "../utils/capitalize";

const ArticleCard = ({ article, className }) => {
  const timeDifference = Date.now() - new Date(article.created_at);
  const timeString = formatTimeString(timeDifference);

  return (
    <article className={className}>
      <p>
        {capitalizeFirstLetter(article.topic)} <br /> Posted by {article.author}{" "}
        {timeString}
      </p>
      <h2>{article.title}</h2>

      <p>{article.body}</p>

      <StyledVoter
        kind={"article"}
        id={article.article_id}
        votes={article.votes}
      />

      <p>{article.comment_count} comments</p>
    </article>
  );
};

export default ArticleCard;
