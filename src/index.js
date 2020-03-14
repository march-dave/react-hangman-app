import React from "react";
import ReactDOM from "react-dom";
import Hangman from "./Components/Hangman";

const Index = () => {
  return (
    <div>
      <Hangman />
      Hello React! You are ready for heroku
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
