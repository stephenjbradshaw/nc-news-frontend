import React from "react";
import Voter from "./Voter";
import { formatTimeString } from "../utils/time";
import { UserContext } from "../UserContext";

const ArticleCard = ({ article }) => {
  const timeDifference = Date.now() - new Date(article.created_at);
  const timeString = formatTimeString(timeDifference);

  return (
    <>
      <p>
        {article.topic} <br /> Posted by {article.author} {timeString}
      </p>
      <h2>{article.title}</h2>

      <p>{article.body}</p>

      <Voter kind={"article"} id={article.article_id} votes={article.votes} />
      <UserContext.Consumer>
        {({ user, toggleLogin }) =>
          !user && (
            <p>
              Please <button onClick={toggleLogin}>log in</button> to vote
            </p>
          )
        }
      </UserContext.Consumer>

      <p>{article.comment_count} comments</p>
    </>
  );
};

export default ArticleCard;
