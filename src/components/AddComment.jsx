import React, { Component } from "react";
import * as api from "../utils/api";

class AddComment extends Component {
  state = { commentToAdd: "" };

  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
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
