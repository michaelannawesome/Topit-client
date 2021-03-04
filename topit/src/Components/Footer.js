import React from "react";
import GH from "../Images/git-logo.png";
import LK from "../Images/link-logo.png";
import { Link } from "react-router-dom";
function Footer(props) {
  return (
    <div className="footer">
      <Link to={"/"}>
        <h6>Michaelann Awesome</h6>
      </Link>

      <a
        href="https://github.com/michaelannawesome"
        target="blank"
        rel="noreferrer"
      >
        <img className="git" src={GH} alt="Github" />
      </a>
      <a
        href="https://www.linkedin.com/in/michaelann-awesome/"
        target="blank"
        rel="noreferrer"
      >
        <img src={LK} alt="Github" className="linkedin" />
      </a>
    </div>
  );
}

export default Footer;
