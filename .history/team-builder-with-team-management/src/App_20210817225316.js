import "./App.css";
import React from "react";

function App(props) {
  return (
    <div className="App">
      <header>
        <h1>Team Builder with Team Management</h1>
      </header>
      <main>
        <Form />
        {/* <MemberList /> */}
        <p>Render the member cards</p>
      </main>
    </div>
  );
}

export default App;
