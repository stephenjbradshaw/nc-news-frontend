import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import AddComment from "./AddComment";
import { UserContext } from "../UserContext";
import ErrorPage from "./ErrorPage";
import { StyledSortComments } from "../styled/lib";
import { StyledCommentsList } from "../styled/lib";
import CommentLogin from "./CommentLogin";

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
        <StyledSortComments
          handleSortChange={this.handleSortChange}
          sort={sort}
          ref={this.ref}
        />
        {user ? (
          <AddComment
            renderNewComment={this.renderNewComment}
            article_id={article_id}
          />
        ) : (
          <CommentLogin toggleLogin={toggleLogin} />
        )}

        <StyledCommentsList
          comments={comments}
          deleteCommentOptimistic={this.deleteCommentOptimistic}
        />
      </section>
    );
  }
}

export default Comments;
