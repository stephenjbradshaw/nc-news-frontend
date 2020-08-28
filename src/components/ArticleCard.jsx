import React from "react";
import Voter from "./Voter";

const ArticleCard = ({ article }) => {
  return (
    <li>
      <p>{article.title}</p>
      <Voter />
    </li>
  );
};

export default ArticleCard;
