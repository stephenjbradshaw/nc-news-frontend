import React, { Component } from "react";
import * as api from "../utils/api";
import { VoteButton } from "../styled/lib";
import { UserContext } from "../UserContext";

class Voter extends Component {
  static contextType = UserContext;
  state = { optimisticVotes: 0 };

  updateVoteOptimistic = (voteType) => {
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
    const { user } = this.context;

    return (
      <aside>
        <VoteButton
          disabled={!user}
          voted={optimisticVotes === 1}
          onClick={(event) => this.updateVoteOptimistic("up")}
        >
          <span role="img" aria-label="Up arrow">
            🔼
          </span>
        </VoteButton>
        <p>{votes + optimisticVotes}</p>
        <VoteButton
          disabled={!user}
          voted={optimisticVotes === -1}
          onClick={(event) => this.updateVoteOptimistic("down")}
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
