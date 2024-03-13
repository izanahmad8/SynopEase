import React from "react";
import "./App.css";
import Home from "./components/Home";
import Summary from "./components/Summary";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient"></div>
      </div>
      <div className="app">
        <Home />
        <Summary />
      </div>
    </main>
  );
};

export default App;
