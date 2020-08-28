import React, { Component } from "react";
import * as api from "../utils/api";

class Nav extends Component {
  state = {};

  componentDidMount() {
    api.getTopics().then((topics) => {
      console.log(topics);
    });
  }
  render() {
    return <nav></nav>;
  }
}

export default Nav;
