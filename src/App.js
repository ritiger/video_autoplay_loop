import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";
import "react-bootstrap/dist/react-bootstrap.min.js";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar></NavigationBar>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Redirect from="/" to="/home" exact />
      </Router>
    </div>
  );
}

export default App;
