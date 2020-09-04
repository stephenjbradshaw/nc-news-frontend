import React, { Component } from "react";
import * as api from "../utils/api";
import { UserContext } from "../UserContext";
import ErrorPage from "../components/ErrorPage";

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
    if (err) return <ErrorPage {...err} />;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Comment:{" "}
          <textarea
            type="text"
            maxlength="280"
            placeholder="Write a comment..."
            value={commentToAdd}
            onChange={this.handleChange}
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddComment;
