import React, { Component } from "react";
import * as api from "../utils/api";
import ErrorPage from "./ErrorPage";
import { StyledButton } from "../styled/lib";
import { capitalizeFirstLetter } from "../utils/capitalize";

class Nav extends Component {
  state = { topics: [], err: null };

  componentDidMount() {
    api
      .getTopics()
      .then((topics) => {
        this.setState({ topics });
      })
      .catch(({ response }) => {
        this.setState({
          err: {
            type: "fetchTopics",
            msg: response.data.msg,
            status: response.status,
          },
        });
      });
  }
  render() {
    const { topics, err } = this.state;
    const { className } = this.props;
    if (err) return <ErrorPage {...err} />;
    return (
      <nav>
        <ul className={className}>
          <StyledButton to="/" key="home">
            All Articles
          </StyledButton>
          {topics.map((topic) => {
            return (
              <StyledButton to={`/articles/${topic.slug}`} key={topic.slug}>
                {capitalizeFirstLetter(topic.slug)}
              </StyledButton>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Nav;
