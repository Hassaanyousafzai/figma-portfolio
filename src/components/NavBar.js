import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import heart from "./Assets/Heart.png";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

import { css } from "./CssFile";

export default function NavBar() {
  const navlinks = ({ isActive }) => {
    return {
      textDecoration: "none",
      fontWeight: "bold",
      backgroundColor: isActive ? "lightblue" : "transparent",
      padding: "8px",
      color: isActive ? "black" : "white",
    };
  };
  return (
    <div>
      <Navbar
        bg="transparent"
        variant="dark"
        style={{ padding: css.NavPadding }}
      >
        <Container>
          <Navbar.Brand>
            <img
              src={heart}
              alt="NavBar Logo"
              style={{ paddingInline: "10px" }}
            />{" "}
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Hassaan Yousafzai
            </NavLink>
          </Navbar.Brand>
          <nav style={{ marginLeft: "auto" }}>
            <NavLink className="mx-3" style={navlinks} to="/">
              {" "}
              Home
            </NavLink>
            <NavLink className="mx-3" style={navlinks} to="/about">
              {" "}
              About
            </NavLink>
            <NavLink className="mx-3" style={navlinks} to="/articles">
              {" "}
              Articles
            </NavLink>

            <Button
              className="mx-2"
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
              variant="outline-light"
            >
              Contact
            </Button>
          </nav>
        </Container>
      </Navbar>
    </div>
  );
}
