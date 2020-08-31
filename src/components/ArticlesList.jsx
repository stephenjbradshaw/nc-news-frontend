import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";
import Loader from "./Loader";

class ArticlesList extends Component {
  state = { articles: [], isLoading: true, sort: "newest" };

  componentDidMount() {
    const { topic } = this.props;
    this.fetchArticles(topic);
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    const { sort } = this.state;

    if (prevProps.topic !== topic) {
      this.setState({ sort: "newest" });
      this.fetchArticles(topic);
    } else if (prevState.sort !== sort) {
      this.fetchArticles(topic, sort);
    }
  }

  fetchArticles = (topic, sort) => {
    this.setState({ isLoading: true });
    api.getArticles(topic, sort).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };

  handleSortChange = (event) => {
    const { value } = event.target;
    this.setState({ sort: value });
  };

  render() {
    const { articles, isLoading, sort } = this.state;
    if (isLoading) {
      return <Loader />;
    } else {
      return (
        <main>
          <label htmlFor="sort-by">Sort articles by: </label>
          <select
            name="sort-by"
            id="sort-by"
            value={sort}
            onChange={this.handleSortChange}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="most_comments">Most comments</option>
            <option value="least_comments">Least comments</option>
            <option value="most_votes">Most votes</option>
            <option value="least_votes">Least votes</option>
          </select>
          <ul>
            {articles.map((article) => {
              return <ArticleCard key={article.article_id} article={article} />;
            })}
          </ul>
        </main>
      );
    }
  }
}

export default ArticlesList;
