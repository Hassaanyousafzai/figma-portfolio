import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import heart from "./Assets/Heart.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { css } from "./CssFile";

export default function NavBar() {
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
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Hassaan Yousafzai
            </Link>
          </Navbar.Brand>
          <nav style={{ marginLeft: "auto" }}>
            <Link
              className="mx-3"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
              to="/"
            >
              {" "}
              Home
            </Link>
            <Link
              className="mx-3"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
              to="/about"
            >
              {" "}
              About
            </Link>
            <Link
              className="mx-3"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
              to="/articles"
            >
              {" "}
              Articles
            </Link>

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
