import React from "react";
import "./App.css";
import { Nav, Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <Logo
          alt=""
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        Throbac
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-end" style={{ width: "95%" }}>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link>   </Nav.Link>
          <Nav.Link href="#contact_us">Contact Us</Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
