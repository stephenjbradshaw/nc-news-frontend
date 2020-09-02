import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";
import { UserContext } from "../UserContext";

class Comments extends Component {
  static contextType = UserContext;

  state = {
    comments: [],
    isLoading: true,
    sort: "newest",
    formIsVisible: false,
  };

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

  handleShowForm = () => {
    this.setState({ formIsVisible: !this.state.formIsVisible });
  };

  renderNewComment = (newComment) => {
    this.setState({ comments: [newComment, ...this.state.comments] });
  };

  render() {
    const { comments, isLoading, sort, formIsVisible } = this.state;
    const { article_id } = this.props;
    const { user } = this.context;

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
        <button disabled={!user} onClick={this.handleShowForm}>
          {formIsVisible ? "Hide" : "Add comment..."}
        </button>
        {!user && <p>Please log in to comment</p>}
        {formIsVisible && user && (
          <AddComment
            renderNewComment={this.renderNewComment}
            article_id={article_id}
          />
        )}
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
