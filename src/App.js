import "./App.css";

import React from "react";
import Pokemon from "./components/Pokemon";
function App() {
  return (
    <div>
      <div style={{ padding: "3%" }}>
        <p>
          <h1 style={{ display: "inline" }}>Poke-app &nbsp;&nbsp;</h1>
          <span id="done">|&nbsp;&nbsp;&nbsp;&nbsp;</span>{" "}
          <hr className="horizontal" />A cumulative collection of pokemon
          catalogues and their details designed in React by ANUJ CHOBE©.
        </p>

        <Pokemon />
      </div>
    </div>
  );
}

export default App;
