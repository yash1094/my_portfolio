import React from "react";
import About from "../About/About";
import Education from "../Education/Education";
import Portfolio from "../Portofolio/Porfolio";
import Contact from "../Contact/Contact";

import "./Body.Components.scss";

const Body = () => (
  <div className="body-content">
    <About />
    <Education />
    <Portfolio />
    <Contact />
  </div>
);

export default Body;
