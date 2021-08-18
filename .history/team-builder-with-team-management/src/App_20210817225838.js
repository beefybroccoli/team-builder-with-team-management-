import "./App.css";
import React from "react";
import Home from "./component/Home";

function App(props) {
  return (
    <div className="App">
      <header>
        <h1>Team Builder with Team Management</h1>
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
