import React, { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
const NavMobile = ({ navItems }) => {
  const [slider, setSlider] = useState(false);

  useEffect(() => console.log(slider));

  const getSliderFlag = (flag) => {
    setSlider(flag);
  };

  return (
    <div className="navbar-mobile">
      <div className="nav-container"></div>
      <button
        className="navbar-burger burger"
        onClick={() => {
          setSlider(!slider);
        }}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>

      {slider ? (
        <div className="nav-slider">
          {navItems.map((item) => (
            <NavbarItem name={item} sliderFlag={getSliderFlag}></NavbarItem>
          ))}
        </div>
      ) : (
        <div className="nav-slider close">
          {navItems.map((item) => (
            <NavbarItem name={item}></NavbarItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavMobile;
