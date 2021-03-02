import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";

import Magic from "./Components/Magic";
import AddMagic from "./Components/AddMagic";
import MagicDetail from "./Components/MagicDetail";

function App() {
  return (
    <div className="App">
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
      <div className="route-container">
        <Switch>
          <Route exact path={["/", "/magic"]} component={MagicDetail} />
          <Route exact path="/add" component={AddMagic} />
          <Route path="/magic/:id" component={Magic} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
