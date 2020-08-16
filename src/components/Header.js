import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">
              View User
            </Link>
            <Link className="nav-link" to="/job">
              Add Job
            </Link>
            <Link className="nav-link" to="/create">
              Add User
            </Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
