import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";
import ErrorPage from "./ErrorPage";

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
    if (err) return <ErrorPage {...err} />;
    return (
      <nav>
        <ul>
          <Link to="/" key="home">
            <button>all articles</button>
          </Link>
          {topics.map((topic) => {
            return (
              <Link to={`/articles/${topic.slug}`} key={topic.slug}>
                <button>{topic.slug}</button>
              </Link>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Nav;
