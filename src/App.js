import React from "react";
import "./App.css";

import Header from "./components/Header";
import ArticlesList from "./components/ArticlesList";
import Articles from "./components/Articles";

function App() {
  return (
    <div className="App">
      <Header />
      <Articles />
    </div>
  );
}

export default App;
