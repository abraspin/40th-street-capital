import { BrowserRouter, Switch, Route, Link, HashRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./style.css";
import { Navbar, NavDropdown, Nav, Form, FormControl, Button, Col, Row } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar className="navbar-dark" bg="dark" expand="lg">
      <Row>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Col>
          <Link className="navbar-brand" to="/">
            {/* <Link className="navbar-brand" to="/"> */}
            40th Street Capital
          </Link>
          {/* // <Navbar.Brand href="/">40th Street Capital</Navbar.Brand> */}
        </Col>
        <Col>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ color: "wheat" }} className="mr-auto">
              <Link to="/About">
                {/* <Nav.Link>ABOUT</Nav.Link> */}
                ABOUT
              </Link>
              <Link to="/Leadership">
                {/* <Nav.Link>LEADERSHIP</Nav.Link> */}
                LEADERSHIP
              </Link>
              <Link to="/Properties">
                {/* <Nav.Link>PROPERTIES</Nav.Link> */}
                PROPERTIES
              </Link>
              <Link to="/ContactMe">
                {/* <Nav.Link>CONTACT</Nav.Link> */}
                CONTACT
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Row>
    </Navbar>
  );
}
export default NavBar;
