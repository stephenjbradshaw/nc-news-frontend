import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import CommentCard from "./CommentCard";

class Comments extends Component {
  state = { comments: [], isLoading: true, sort: "newest" };

  componentDidMount() {
    const { article_id } = this.props;
    this.fetchComments(article_id);
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort } = this.state;
    const { article_id } = this.props;

    if (prevState.sort !== sort) {
      this.fetchComments(article_id, sort);
    }
  }

  fetchComments = (article_id, sort) => {
    this.setState({ isLoading: true });
    api.getComments(article_id, sort).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  };

  handleSortChange = (event) => {
    const { value } = event.target;
    this.setState({ sort: value });
  };

  render() {
    const { comments, isLoading, sort } = this.state;
    if (isLoading) return <Loader />;
    return (
      <section>
        <label htmlFor="sort-by">Sort comments by: </label>
        <select
          name="sort_by"
          id="sort_by"
          value={sort}
          onChange={this.handleSortChange}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="most_votes">Most votes</option>
          <option value="least_votes">Least votes</option>
        </select>
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <CommentCard comment={comment} />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Comments;
