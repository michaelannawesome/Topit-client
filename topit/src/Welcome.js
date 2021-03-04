import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/welcome.css";
// import Magic from "./Components/Magic";
// import AddMagic from "./Components/AddMagic";
// import MagicDetail from "./Components/MagicDetail";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";

function Welcome(props) {
  const [displayLinks, setDisplayLinks] = useState(false);

  const showLinks = () => {
    setDisplayLinks(true);
  };
  return (
    <div>
      <div className="landing">
        {/* <p>
          
        </p> */}

        {displayLinks === false && (
          <div className="container">
            <button onClick={showLinks} className="animated-word">
              In an effort to keep the astonishment in magic, please only enter
              if you intend to keep the secrets. OPEN SESAME
            </button>
          </div>
        )}
      </div>
      {displayLinks === true && (
        <nav className="nav">
          <li className="list-item">
            <Link to={"/magic"} className="navlink">
              ABARACADATABASE
            </Link>
          </li>
          <li className="list-item">
            <Link to={"/add"} className="navlink">
              TA-ADD-A
            </Link>
          </li>
        </nav>
      )}
    </div>
  );
}

export default Welcome;
