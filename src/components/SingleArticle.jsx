import React, { Component } from "react";
import SingleArticleCard from "./SingleArticleCard";
import Loader from "./Loader";
import * as api from "../utils/api";
import Comments from "./Comments";
import ErrorPage from "./ErrorPage";

class SingleArticle extends Component {
  state = { article: {}, isLoading: true, err: null };

  componentDidMount() {
    const { article_id } = this.props;
    api
      .getSingleArticle(article_id)
      .then((article) => {
        this.setState({ article, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: {
            type: "fetchSingleArticle",
            msg: response.data.msg,
            status: response.status,
          },
        });
      });
  }

  render() {
    const { article, isLoading, err } = this.state;
    const { article_id, location } = this.props;

    if (isLoading) return <Loader />;
    if (err) return <ErrorPage {...err} />;
    return (
      <main>
        <SingleArticleCard article={article} />
        <Comments article_id={article_id} location={location} />
      </main>
    );
  }
}

export default SingleArticle;
