import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

class Nav extends Component {
  state = { topics: [] };

  componentDidMount() {
    api.getTopics().then((topics) => {
      this.setState({ topics });
    });
  }
  render() {
    const { topics } = this.state;
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
