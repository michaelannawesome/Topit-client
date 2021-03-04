import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";

import Magic from "./Components/Magic";
import AddMagic from "./Components/AddMagic";
import MagicDetail from "./Components/MagicDetail";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Welcome from "./Welcome";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="router-container">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/magic" component={MagicDetail} />
          <Route exact path="/add" component={AddMagic} />
          <Route path="/magic/:id" component={Magic} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
