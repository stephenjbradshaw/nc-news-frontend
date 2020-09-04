import React from "react";
import { Link } from "@reach/router";

const ErrorPage = (err) => {
  const { type, msg, status } = err;
  const errRef = {
    general404: "Couldn't find that page!",
    fetchTopics: "Could not fetch any topics.",
    fetchArticles: "Could not fetch any articles.",
    fetchSingleArticle: "Could not fetch the article.",
    updateVotes: "Your vote could not be added.",
    fetchComments: "Could not fetch any comments.",
    postComment: "Your comment could not be posted.",
    deleteComment: "Your comment could not be deleted.",
  };

  return (
    <header>
      <p>
        Sorry! {errRef[type]} Here's some more information: <br />
      </p>
      <p>
        Status: {status} | Message: {msg}
      </p>
      <Link to="/">Go home</Link>
    </header>
  );
};

export default ErrorPage;
