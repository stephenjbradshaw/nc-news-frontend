import React, { Component } from "react";
import * as api from "../utils/api";
import { UserContext } from "../UserContext";

class AddComment extends Component {
  state = { commentToAdd: "" };
  static contextType = UserContext;

  handleSubmit = (submitEvent) => {
    const { commentToAdd } = this.state;
    const { article_id } = this.props;
    const { renderNewComment } = this.props;

    submitEvent.preventDefault();
    api
      .postComment(article_id, "jessjelly", commentToAdd)
      .then((newComment) => {
        renderNewComment(newComment);
      });
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ commentToAdd: value });
  };

  render() {
    const { commentToAdd } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Comment:{" "}
          <input
            type="text"
            placeholder="Write a comment..."
            value={commentToAdd}
            onChange={this.handleChange}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddComment;
