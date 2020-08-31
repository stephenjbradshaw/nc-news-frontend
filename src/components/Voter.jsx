import React, { Component } from "react";
import * as api from "../utils/api";
import { VoteButton } from "../styled/lib";

class Voter extends Component {
  state = { kind: null, id: null, voteStatus: null, votes: 0 };

  componentDidMount() {
    const { kind, id, votes } = this.props;
    const retrievedVoteStatus = localStorage.getItem(
      `${kind}_${id}_voteStatus`
    );
    if (retrievedVoteStatus !== undefined) {
      const parsedVoteStatus = JSON.parse(retrievedVoteStatus);
      this.setState({ voteStatus: parsedVoteStatus });
    }
    this.setState({ kind, id, votes });
  }

  componentDidUpdate() {
    const { kind, id, voteStatus } = this.state;
    localStorage.setItem(
      `${kind}_${id}_voteStatus`,
      JSON.stringify(voteStatus)
    );
  }

  handleUpvoteClick = (event) => {
    const { kind, id, voteStatus } = this.state;

    if (voteStatus === null) {
      this.setState({ votes: this.state.votes + 1, voteStatus: "upvoted" });
      api.patchVotes(kind, id, 1);
    } else if (voteStatus === "upvoted") {
      this.setState({ votes: this.state.votes - 1, voteStatus: null });
      api.patchVotes(kind, id, -1);
    } else if (voteStatus === "downvoted") {
      this.setState({ votes: this.state.votes + 2, voteStatus: "upvoted" });
      api.patchVotes(kind, id, +2);
    }
  };

  handleDownvoteClick = (event) => {
    const { kind, id, voteStatus } = this.state;

    if (voteStatus === null) {
      this.setState({ votes: this.state.votes - 1, voteStatus: "downvoted" });
      api.patchVotes(kind, id, -1);
    } else if (voteStatus === "downvoted") {
      this.setState({ votes: this.state.votes + 1, voteStatus: null });
      api.patchVotes(kind, id, 1);
    } else if (voteStatus === "upvoted") {
      this.setState({ votes: this.state.votes - 2, voteStatus: "downvoted" });
      api.patchVotes(kind, id, -2);
    }
  };

  render() {
    const { voteStatus, votes } = this.state;
    const isUpvoted = voteStatus === "upvoted";
    const isDownvoted = voteStatus === "downvoted";

    return (
      <aside>
        <VoteButton voted={isUpvoted} onClick={this.handleUpvoteClick}>
          <span role="img" aria-label="Up arrow">
            🔼
          </span>
        </VoteButton>
        <p>Votes: {votes}</p>
        <VoteButton voted={isDownvoted} onClick={this.handleDownvoteClick}>
          <span role="img" aria-label="Down arrow">
            🔽
          </span>
        </VoteButton>
      </aside>
    );
  }
}

export default Voter;
