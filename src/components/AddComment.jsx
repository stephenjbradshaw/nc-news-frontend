import React, { Component } from "react";
import * as api from "../utils/api";
import { UserContext } from "../UserContext";
import ErrorPage from "../components/ErrorPage";
import { StyledButton } from "../styled/lib";

class AddComment extends Component {
  state = { commentToAdd: "", err: null };
  static contextType = UserContext;

  handleSubmit = (submitEvent) => {
    const { commentToAdd } = this.state;
    const { renderNewComment, article_id } = this.props;
    const { user } = this.context;

    submitEvent.preventDefault();

    commentToAdd &&
      api
        .postComment(article_id, user, commentToAdd)
        .then((newComment) => {
          renderNewComment(newComment);
        })
        .catch(({ response }) => {
          this.setState({
            err: {
              type: "postComment",
              msg: response.data.msg,
              status: response.status,
            },
          });
        });
    this.setState({ commentToAdd: "" });
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ commentToAdd: value });
  };

  render() {
    const { commentToAdd, err } = this.state;
    const { className } = this.props;
    if (err) return <ErrorPage {...err} />;
    return (
      <form className={className} onSubmit={this.handleSubmit}>
        <label htmlFor="comment">Comment: </label>
        <textarea
          id="comment"
          type="text"
          maxLength="280"
          placeholder="Write a comment..."
          value={commentToAdd}
          onChange={this.handleChange}
        ></textarea>
        <StyledButton as="button" type="submit">
          Submit
        </StyledButton>
      </form>
    );
  }
}

export default AddComment;
