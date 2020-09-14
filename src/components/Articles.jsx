import React, { Component } from "react";
import * as api from "../utils/api";
import { StyledLoader } from "../styled/lib";
import ErrorPage from "./ErrorPage";
import { StyledSortArticles } from "../styled/lib";
import { StyledArticlesList } from "../styled/lib";

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
    if (err) return <ErrorPage {...err} />;

    return (
      <main>
        <StyledSortArticles
          handleSortChange={this.handleSortChange}
          sort={sort}
        />
        {isLoading ? (
          <StyledLoader />
        ) : (
          <StyledArticlesList articles={articles} />
        )}
      </main>
    );
  }
}

export default Articles;
