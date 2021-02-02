import React from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Components/Nav";
import AnimatedSwitch from "./Components/AnimatedSwitch";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="page-container">
          <AnimatedSwitch />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
