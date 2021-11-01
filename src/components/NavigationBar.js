import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { ReactComponent as Logo } from "./logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand
        style={{ fontSize: "2.5rem", fontWeight: "bold", color: "tomato" }}
      >
        <Logo
          alt=""
          width="60"
          height="60"
          className="d-inline-block align-top"
        />
        Throbac
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-end" style={{ width: "95%" }}>
          <LinkContainer to="/home">
            <Nav.Link>
              <FontAwesomeIcon
                icon={faHome}
                style={{ marginRight: "6px" }}
              ></FontAwesomeIcon>
              Home
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact" style={{ marginLeft: "15px" }}>
            <Nav.Link>
              <FontAwesomeIcon
                icon={faAddressCard}
                style={{ marginRight: "6px" }}
              ></FontAwesomeIcon>
              Contact US
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavigationBar;