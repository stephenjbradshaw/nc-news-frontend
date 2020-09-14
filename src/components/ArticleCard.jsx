import React from "react";
import Voter from "./Voter";
import { StyledLink } from "../styled/lib";
import { formatTimeString } from "../utils/time";
import { capitalizeFirstLetter } from "../utils/capitalize";

const ArticleCard = ({ article, className }) => {
  const timeDifference = Date.now() - new Date(article.created_at);
  const timeString = formatTimeString(timeDifference);

  return (
    <li className={className}>
      <article>
        <p>
          {capitalizeFirstLetter(article.topic)} <br /> Posted by{" "}
          {article.author} {timeString}
        </p>
        <StyledLink to={`/article/${article.article_id}`}>
          <h2>{article.title}</h2>
        </StyledLink>

        {article.body.length > 100 ? (
          <p>
            {article.body.slice(0, 100) + "... "}

            <StyledLink to={`/article/${article.article_id}`}>
              Read more
            </StyledLink>
          </p>
        ) : (
          article.body
        )}

        <Voter kind={"article"} id={article.article_id} votes={article.votes} />

        <StyledLink
          to={`/article/${article.article_id}`}
          state={{ fromCommentsLink: true }}
        >
          <p>{article.comment_count} comments</p>
        </StyledLink>
      </article>
    </li>
  );
};

export default ArticleCard;
