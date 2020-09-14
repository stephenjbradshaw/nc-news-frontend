import React, { Component } from "react";
import * as api from "../utils/api";
import { StyledVoteButton } from "../styled/lib";
import { StyledButton } from "../styled/lib";
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
    const { votes, className } = this.props;
    const { optimisticVotes, err } = this.state;
    const { user, toggleLogin } = this.context;

    if (err) return <ErrorPage {...err} />;
    return (
      <section className={className}>
        <StyledVoteButton
          kind="up"
          optimisticVotes={optimisticVotes}
          updateVoteOptimistic={this.updateVoteOptimistic}
          voted={optimisticVotes === 1}
        ></StyledVoteButton>
        <p>{votes + optimisticVotes}</p>
        <StyledVoteButton
          kind="down"
          optimisticVotes={optimisticVotes}
          updateVoteOptimistic={this.updateVoteOptimistic}
          voted={optimisticVotes === -1}
        ></StyledVoteButton>

        {!user && (
          <p>
            Please{" "}
            <StyledButton as="button" onClick={toggleLogin}>
              Log in
            </StyledButton>{" "}
            to vote
          </p>
        )}
      </section>
    );
  }
}

export default Voter;
