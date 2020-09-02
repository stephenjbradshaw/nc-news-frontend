import React from "react";
import Voter from "./Voter";
import { Link } from "@reach/router";
import { formatTimeString } from "../utils/time";
import { UserContext } from "../UserContext";

const ArticleCard = ({ article, isSingleArticle }) => {
  const timeDifference = Date.now() - new Date(article.created_at);
  const timeString = formatTimeString(timeDifference);

  return (
    <>
      <p>
        {article.topic} | Posted by {article.author} {timeString}
      </p>
      {isSingleArticle ? (
        <h2>{article.title}</h2>
      ) : (
        <Link to={`/article/${article.article_id}`}>
          <h2>{article.title}</h2>
        </Link>
      )}

      <p>{article.body}</p>

      <Voter kind={"article"} id={article.article_id} votes={article.votes} />
      <UserContext.Consumer>
        {({ user }) => !user && <p>Please log in to vote</p>}
      </UserContext.Consumer>
      {isSingleArticle ? (
        <p>{article.comment_count} comments</p>
      ) : (
        <Link to={`/article/${article.article_id}`}>
          <p>{article.comment_count} comments</p>
        </Link>
      )}
    </>
  );
};

export default ArticleCard;
