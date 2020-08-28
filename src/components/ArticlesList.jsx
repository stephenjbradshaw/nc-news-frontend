import React, { Component } from "react";
import ArticleCard from "./ArticleCard";

class ArticlesList extends Component {
  render() {
    return (
      <ul>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </ul>
    );
  }
}

export default ArticlesList;
