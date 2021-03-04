import React from "react";
import Logo from "../Images/logo-final.png";

function Header(props) {
  return (
    <div className="logo">
      <img className="img-logo" src={Logo} alt="hands" />
    </div>
  );
}

export default Header;
