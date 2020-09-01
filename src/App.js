import React from "react";
import "./App.css";

import Header from "./components/Header";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Articles path="/" />
        <Articles path="/articles/:topic" />
        {/* <SingleArticle path="/article/:article_id" /> */}
      </Router>
    </div>
  );
}

export default App;
