import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";
import Loader from "./Loader";

class Nav extends Component {
  state = { topics: [], isLoading: true };

  componentDidMount() {
    api.getTopics().then((topics) => {
      this.setState({ topics, isLoading: false });
    });
  }
  render() {
    const { topics, isLoading } = this.state;
    if (isLoading) {
      return <Loader />;
    } else
      return (
        <nav>
          <ul>
            <Link to="/" key="home">
              <button>home</button>
            </Link>
            {topics.map((topic) => {
              return (
                <Link to={topic.slug} key={topic.slug}>
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
