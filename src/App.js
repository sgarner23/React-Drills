import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      ></input>
      <p>{userInput}</p>
    </div>
  );
}

export default App;
