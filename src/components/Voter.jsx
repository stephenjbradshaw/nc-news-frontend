import React, { Component } from "react";
import * as api from "../utils/api";
import { VoteButton } from "../styled/lib";
import { UserContext } from "../UserContext";
import ErrorPage from "./ErrorPage";

class Voter extends Component {
  static contextType = UserContext;
  state = { optimisticVotes: 0, err: null };

  updateVotes = (kind, id, change) => {
    api.patchVotes(kind, id, change).catch(({ response }) => {
      this.setState({
        err: {
          type: "updateVotes",
          msg: response.data.msg,
          status: response.status,
        },
      });
    });
  };

  updateVoteOptimistic = (voteType) => {
    const { kind, id } = this.props;
    const { optimisticVotes } = this.state;

    if (voteType === "up") {
      if (optimisticVotes === 0) {
        this.setState({ optimisticVotes: 1 });
        this.updateVotes(kind, id, 1);
      } else if (optimisticVotes === 1) {
        this.setState({ optimisticVotes: 0 });
        this.updateVotes(kind, id, -1);
      } else if (optimisticVotes === -1) {
        this.setState({ optimisticVotes: 1 });
        this.updateVotes(kind, id, 2);
      }
    } else if (voteType === "down") {
      if (optimisticVotes === 0) {
        this.setState({ optimisticVotes: -1 });
        this.updateVotes(kind, id, -1);
      } else if (optimisticVotes === -1) {
        this.setState({ optimisticVotes: 0 });
        this.updateVotes(kind, id, 1);
      } else if (optimisticVotes === 1) {
        this.setState({ optimisticVotes: -1 });
        this.updateVotes(kind, id, -2);
      }
    }
  };

  render() {
    const { votes } = this.props;
    const { optimisticVotes, err } = this.state;
    const { user } = this.context;

    if (err) return <ErrorPage {...err} />;
    return (
      <section>
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
        <UserContext.Consumer>
          {({ user, toggleLogin }) =>
            !user && (
              <p>
                Please <button onClick={toggleLogin}>log in</button> to vote
              </p>
            )
          }
        </UserContext.Consumer>
      </section>
    );
  }
}

export default Voter;
