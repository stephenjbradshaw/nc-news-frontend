import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";
import { UserContext } from "../UserContext";
import ErrorPage from "./ErrorPage";
import SortComments from "./SortComments";

class Comments extends Component {
  static contextType = UserContext;

  state = {
    comments: [],
    isLoading: true,
    sort: "newest",
    err: null,
  };
  ref = React.createRef();

  componentDidMount() {
    const { article_id } = this.props;
    const { sort } = this.state;
    this.fetchComments(article_id, sort);
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort } = this.state;
    const { article_id, location } = this.props;

    if (this.ref.current && location.state.fromCommentsLink) {
      this.ref.current.scrollIntoView({ behavior: "smooth" });
    }

    if (prevState.sort !== sort) {
      this.fetchComments(article_id, sort);
    }
  }

  fetchComments = (article_id, sort) => {
    this.setState({ isLoading: true });
    api
      .getComments(article_id, sort)
      .then((comments) => {
        this.setState({ comments, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: {
            type: "fetchComments",
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

  renderNewComment = (newComment) => {
    this.setState({ comments: [newComment, ...this.state.comments] });
  };

  deleteCommentOptimistic = (comment_id) => {
    const { comments } = this.state;
    api.deleteComment(comment_id).catch(({ response }) => {
      this.setState({
        isLoading: false,
        err: {
          type: "deleteComment",
          msg: response.data.msg,
          status: response.status,
        },
      });
    });
    const filteredComments = comments.filter(
      (comment) => comment.comment_id !== comment_id
    );
    this.setState({ comments: [...filteredComments] });
  };

  render() {
    const { comments, isLoading, sort, err } = this.state;
    const { article_id } = this.props;
    const { user, toggleLogin } = this.context;

    if (isLoading) return <Loader />;
    if (err) return <ErrorPage {...err} />;
    return (
      <section>
        <SortComments
          handleSortChange={this.handleSortChange}
          sort={sort}
          ref={this.ref}
        />
        {!user && (
          <p>
            Please <button onClick={toggleLogin}>log in</button> to comment
          </p>
        )}
        {user && (
          <AddComment
            renderNewComment={this.renderNewComment}
            article_id={article_id}
          />
        )}
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <CommentCard
                  comment={comment}
                  deleteCommentOptimistic={this.deleteCommentOptimistic}
                />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Comments;
