import React from "react";
import Voter from "./Voter";
import { Link } from "@reach/router";
import { formatTimeString } from "../utils/time";

const ArticleCard = ({ article, className }) => {
  const timeDifference = Date.now() - new Date(article.created_at);
  const timeString = formatTimeString(timeDifference);

  return (
    <li className={className}>
      <article>
        <p>
          {article.topic} <br /> Posted by {article.author} {timeString}
        </p>
        <Link to={`/article/${article.article_id}`}>
          <h2>{article.title}</h2>
        </Link>

        {article.body.length > 100 ? (
          <p>
            {article.body.slice(0, 100) + "... "}

            <Link to={`/article/${article.article_id}`}>Read more</Link>
          </p>
        ) : (
          article.body
        )}

        <Voter kind={"article"} id={article.article_id} votes={article.votes} />

        <Link
          to={`/article/${article.article_id}`}
          state={{ fromCommentsLink: true }}
        >
          <p>{article.comment_count} comments</p>
        </Link>
      </article>
    </li>
  );
};

export default ArticleCard;
