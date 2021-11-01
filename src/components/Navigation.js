import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
return (
// {/* <Navbar bg="dark" expand="lg" variant="dark">
// <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
// <Navbar.Toggle aria-controls="basic-navbar-nav" />
// <Navbar.Collapse id="basic-navbar-nav">
// <Nav className="mr-auto">
// <Nav.Link href="#home">Home</Nav.Link>
// <Nav.Link href="#link">Link</Nav.Link>
// </Nav>
// </Navbar.Collapse>
// </Navbar> */}
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
          <Nav.Link href="#link">Link</Nav.Link>         
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
);
}
export default NavigationBar;