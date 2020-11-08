import React from "react";
import About from "./About";
import Home from "./Home";
import Education from "./Education";
import Portfolio from "./Porfolio";
import Contact from "./Contact";

import "./Body.Components.scss";

const Body = () => (
  <div className="body">
    <Home />
    <About />
    <Education />
    <Portfolio />
    <Contact />
  </div>
);

export default Body;
