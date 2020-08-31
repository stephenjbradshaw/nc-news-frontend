import React from "react";
import ArticlesList from "./ArticlesList";

const Home = (props) => {
  const { topic } = props;
  return (
    <main>
      <ArticlesList topic={topic} />
    </main>
  );
};

export default Home;
