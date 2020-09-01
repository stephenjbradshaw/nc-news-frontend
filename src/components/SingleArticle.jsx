import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import Loader from "./Loader";
import * as api from "../utils/api";
import Comments from "./Comments";

class SingleArticle extends Component {
  state = { article: {}, isLoading: true };

  componentDidMount() {
    const { article_id } = this.props;
    api.getSingleArticle(article_id).then((article) => {
      this.setState({ article, isLoading: false });
    });
  }

  render() {
    const { article, isLoading } = this.state;
    const { article_id } = this.props;

    if (isLoading) return <Loader />;
    return (
      <main>
        <article>
          <ArticleCard article={article} isListItem={false} />
        </article>
        <Comments article_id={article_id} />
      </main>
    );
  }
}

export default SingleArticle;
