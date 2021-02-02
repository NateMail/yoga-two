import React from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Components/Nav";
import AnimatedSwitch from "./Components/AnimatedSwitch";
import Quotes from "./Components/Quotes";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="App">
      <Quotes />
      <BrowserRouter>
        <Nav />
        <div className="page-container">
          <AnimatedSwitch />
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
