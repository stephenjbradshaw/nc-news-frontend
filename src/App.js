import React, { Component } from "react";
import "./App.css";

import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import { Router } from "@reach/router";
import { UserContext } from "./UserContext";
import ErrorPage from "./components/ErrorPage";
import { StyledHeader } from "./styled/lib";

class App extends Component {
  state = { user: null };

  toggleLogin = () => {
    this.setState(({ user }) => {
      if (user) return { user: null };
      else return { user: "jessjelly" };
    });
  };

  render() {
    const err = { type: "general404", msg: "Page not found!", status: 404 };
    return (
      <div className="App">
        <UserContext.Provider
          value={{ user: this.state.user, toggleLogin: this.toggleLogin }}
        >
          <StyledHeader />
          <Router>
            <Articles path="/" />
            <Articles path="/articles/:topic" />
            <SingleArticle path="/article/:article_id" />
            <ErrorPage default {...err} />
          </Router>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
