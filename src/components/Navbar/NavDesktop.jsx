import React from "react";
import NavbarItem from "./NavbarItem";

const NavDesktop = ({ navItems }) => {
  return (
    // <div className="nav-desktop">
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-end">
        {/* <a className="navbar-item" href="#home">
          Home
        </a>
        <a className="navbar-item" href="#about">
          About
        </a>
        <a className="navbar-item" href="#education">
          Education
        </a>
        <a className="navbar-item" href="#portfolio">
          Portfolio
        </a>
        <a className="navbar-item" href="#contact">
          Contact
        </a> */}
        {navItems.map((item) => (
          <NavbarItem name={item}></NavbarItem>
        ))}
      </div>
    </div>
    // </div>
  );
};

export default NavDesktop;
