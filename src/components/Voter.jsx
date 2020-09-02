import React, { Component } from "react";
import * as api from "../utils/api";
import { VoteButton } from "../styled/lib";

class Voter extends Component {
  state = { optimisticVotes: 0 };

  updateVote = (voteType) => {
    const { kind, id } = this.props;
    const { optimisticVotes } = this.state;

    if (voteType === "up") {
      if (optimisticVotes === 0) {
        this.setState({ optimisticVotes: 1 });
        api.patchVotes(kind, id, 1);
      } else if (optimisticVotes === 1) {
        this.setState({ optimisticVotes: 0 });
        api.patchVotes(kind, id, -1);
      } else if (optimisticVotes === -1) {
        this.setState({ optimisticVotes: 1 });
        api.patchVotes(kind, id, 2);
      }
    } else if (voteType === "down") {
      if (optimisticVotes === 0) {
        this.setState({ optimisticVotes: -1 });
        api.patchVotes(kind, id, -1);
      } else if (optimisticVotes === -1) {
        this.setState({ optimisticVotes: 0 });
        api.patchVotes(kind, id, 1);
      } else if (optimisticVotes === 1) {
        this.setState({ optimisticVotes: -1 });
        api.patchVotes(kind, id, -2);
      }
    }
  };

  render() {
    const { votes } = this.props;
    const { optimisticVotes } = this.state;

    return (
      <aside>
        <VoteButton
          voted={optimisticVotes === 1}
          onClick={(event) => this.updateVote("up")}
        >
          <span role="img" aria-label="Up arrow">
            🔼
          </span>
        </VoteButton>
        <p>{votes + optimisticVotes}</p>
        <VoteButton
          voted={optimisticVotes === -1}
          onClick={(event) => this.updateVote("down")}
        >
          <span role="img" aria-label="Down arrow">
            🔽
          </span>
        </VoteButton>
      </aside>
    );
  }
}

export default Voter;
