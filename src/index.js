import React from "react";
import ReactDOM from "react-dom";
import Hangman from "./Components/Hangman";

const Index = () => {
  return (
    <div>
      <Hangman />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
