import "./Navbar.Component.scss";
import React from "react";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

const Navbar = () => {
  const navList = ["Home", "About", "Education", "Portfolio", "Contact"];
  return (
    <nav
      className={"navbar is-fixed-top"}
      role="navigation"
      aria-label="main navigation"
    >
      <NavDesktop navItems={navList} />
      <NavMobile navItems={navList} />
    </nav>
  );
};

export default Navbar;
