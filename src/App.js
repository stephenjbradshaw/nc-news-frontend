import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import { Router } from "@reach/router";
import { UserContext } from "./UserContext";
import ErrorPage from "./components/ErrorPage";

class App extends Component {
  toggleLogin = () => {
    if (this.state.user) this.setState({ user: null });
    else this.setState({ user: "jessjelly" });
  };

  state = { user: null, toggleLogin: this.toggleLogin };

  render() {
    const err = { type: "general404", msg: "Page not found!", status: 404 };
    return (
      <div className="App">
        <UserContext.Provider value={this.state}>
          <Header />
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
