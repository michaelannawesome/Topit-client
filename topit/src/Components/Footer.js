import React from "react";
import GH from "../Images/git-logo.png";
import LK from "../Images/link-logo.png";

function Footer(props) {
  return (
    <div className="footer">
      <h4>Michaelann Awesome</h4>
      <a
        href="https://github.com/michaelannawesome"
        target="blank"
        rel="noreferrer"
      >
        <img src={GH} alt="Github" />
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
