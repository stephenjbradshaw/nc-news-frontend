import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";

class ArticlesList extends Component {
  componentDidMount() {
    api.getArticles().then((articles) => {
      console.log(articles);
    });
  }

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
