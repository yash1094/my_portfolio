import React from "react";
import { Link } from "react-scroll";

const NavbarItem = ({ name, sliderFlag = () => {} }) => {
  return (
    <div className="navbar-item">
      {/* {isMobile ? (
        <button>{name}</button>
      ) : ( */}
      <Link
        to={name.toLowerCase()}
        spy={true}
        smooth={true}
        onClick={() => {
          sliderFlag(false);
        }}
      >
        {name}
      </Link>
      {/* )} */}
    </div>
  );
};

export default NavbarItem;
