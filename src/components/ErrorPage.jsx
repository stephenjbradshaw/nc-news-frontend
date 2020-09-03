import React from "react";
import { Link } from "@reach/router";

const ErrorPage = (err) => {
  const { type, msg, status } = err;
  return (
    <header>
      <p>
        Sorry! {type === "general404" && "Couldn't find that page! "}
        {type === "fetchTopics" && "Could not fetch any topics. "}
        {type === "fetchArticles" && "Could not fetch any articles. "}
        {type === "fetchSingleArticle" && "Could not fetch the article. "}
        {type === "updateVotes" && "Your vote could not be added. "}
        {type === "fetchComments" && "Could not fetch any comments. "}
        {type === "postComment" && "Your comment could not be posted. "}
        {type === "deleteComment" && "Your comment could not be deleted. "}
        Here's some more information: <br />
      </p>
      <p>
        Status: {status} | Message: {msg}
      </p>
      <Link to="/">Go home</Link>
    </header>
  );
};

export default ErrorPage;
