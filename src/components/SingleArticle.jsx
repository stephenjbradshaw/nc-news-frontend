import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import Loader from "./Loader";
import * as api from "../utils/api";
import Comments from "./Comments";
import AddComment from "./AddComment";

class SingleArticle extends Component {
  state = { article: {}, isLoading: true, formIsVisible: false };

  componentDidMount() {
    const { article_id } = this.props;
    api.getSingleArticle(article_id).then((article) => {
      this.setState({ article, isLoading: false });
    });
  }

  handleClick = () => {
    this.setState({ formIsVisible: !this.state.formIsVisible });
  };

  render() {
    const { article, isLoading, formIsVisible } = this.state;
    const { article_id } = this.props;

    if (isLoading) return <Loader />;
    return (
      <main>
        <article>
          <ArticleCard article={article} isListItem={false} />
        </article>
        <button onClick={this.handleClick}>
          {formIsVisible ? "Hide" : "Add comment..."}
        </button>
        {formIsVisible && <AddComment />}
        <Comments article_id={article_id} />
      </main>
    );
  }
}

export default SingleArticle;
