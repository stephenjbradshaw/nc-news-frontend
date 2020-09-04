import React from "react";
import { StyledArticleCard } from "../styled/lib";

const ArticlesList = ({ articles, className }) => {
  return (
    <ul className={className}>
      {articles.map((article) => {
        return <StyledArticleCard key={article.article_id} article={article} />;
      })}
    </ul>
  );
};

export default ArticlesList;
