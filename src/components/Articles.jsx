import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";

class Articles extends Component {
  state = { articles: [], isLoading: true, sort: "newest", err: null };

  componentDidMount() {
    const { topic } = this.props;
    const { sort } = this.state;
    this.fetchArticles(topic, sort);
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    const { sort } = this.state;

    if (prevProps.topic !== topic) {
      this.fetchArticles(topic, sort);
    } else if (prevState.sort !== sort) {
      this.fetchArticles(topic, sort);
    }
  }

  fetchArticles = (topic, sort) => {
    this.setState({ isLoading: true });
    api
      .getArticles(topic, sort)
      .then((articles) => {
        this.setState({ articles, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: {
            type: "fetchArticles",
            msg: response.data.msg,
            status: response.status,
          },
        });
      });
  };

  handleSortChange = (event) => {
    const { value } = event.target;
    this.setState({ sort: value });
  };

  render() {
    const { articles, isLoading, sort, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorPage {...err} />;
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
            return (
              <ul key={article.article_id}>
                <ArticleCard article={article} />
              </ul>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default Articles;
