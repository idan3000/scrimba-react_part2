import React from "react";
import imagesData from "../imagesData";

const NavBar = () => {
  return (
    <nav className="nav--bar">
      <img
        src={imagesData.airbnb_logo}
        alt="airbnb-logo"
        className="img__logo"
      />
    </nav>
  );
};

export default NavBar;
