import React from "react";
import About from "./About";
import Home from "./Home";
import NavBar from "./Navbar";
import Education from "./Education";
import Portfolio from "./Porfolio";
import Contact from "./Contact";

import "./Body.Components.scss";

const Body = () => (
  <div className="body">
    <NavBar />
    <Home />
    <About />
    <Education />
    <Portfolio />
    <Contact />
  </div>
);

export default Body;
