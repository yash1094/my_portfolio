import React from "react";
import NavbarItem from "./NavbarItem";

const NavDesktop = ({ navItems }) => {
  return (
    // <div className="nav-desktop">
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-end">
        {navItems.map((item) => (
          <NavbarItem name={item}></NavbarItem>
        ))}
      </div>
    </div>
    // </div>
  );
};

export default NavDesktop;
