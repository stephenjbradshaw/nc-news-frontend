import React from "react";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Home path="/" />
        <Home path="/:topic" />
      </Router>
    </div>
  );
}

export default App;
