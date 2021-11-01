import React from "react";
import "./App.css";
// import { Nav, Navbar } from "react-bootstrap";

// import { ReactComponent as Logo } from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";

import Contact from "./components/Contact";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import "react-bootstrap/dist/react-bootstrap.min.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar></NavigationBar>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Router>
    </div>
  );
}
export default App;
