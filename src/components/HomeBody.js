import React from "react";
import { css } from "./CssFile";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import NavBar from "./NavBar";
import Footer from "./Footer";

export default function HomeBody() {
  return (
    <>
      {/* <NavBar /> */}
      <div className="container my-2" style={{ textAlign: "left" }}>
        {/* HOME */}
        <div>
          <Row>
            <Col lg={7} style={{ marginBottom: "50px" }}>
              <h4
                style={{
                  color: css.homeColor,
                  fontSize: css.homeSize,
                }}
                className="py-5"
              >
                I'm Hassaan, Computer Scientist and Graphic Designer.
              </h4>

              <p style={{ color: "white" }}>
                I specialise in rapidly prototyping software companies and web
                applications. I talk about my journey on{" "}
                <a href="/" style={{ color: "lightblue" }}>
                  Twitter
                </a>
                , commit code to{" "}
                <a href="/" style={{ color: "lightgrey" }}>
                  Github
                </a>
                , and take shots on{" "}
                <a href="/" style={{ color: "red" }}>
                  Dribbble
                </a>
                .
              </p>
            </Col>
          </Row>
        </div>

        {/* ARTICLES */}
        <section>
          <div style={{ marginTop: "50px", marginBottom: "70px" }}>
            <Row>
              <Col lg={8}>
                <div style={{ textAlign: "left" }}>
                  <h5>Latest Articles</h5>

                  <p>
                    Reducing cognitive load by theming my tools{" "}
                    <p style={{ fontSize: css.spanSize, color: css.spanColor }}>
                      September 08, 2019
                    </p>
                  </p>

                  <p>
                    Code splitting and lazy loading a server side rendered React
                    app{" "}
                    <p style={{ fontSize: css.spanSize, color: css.spanColor }}>
                      September 08, 2019
                    </p>
                  </p>

                  <p>
                    Easy project switching with Itermocil and command line
                    shortcuts
                    <p style={{ fontSize: css.spanSize, color: css.spanColor }}>
                      September 08, 2019
                    </p>
                  </p>
                </div>
              </Col>
              <Col lg={4}>
                <p>
                  All Articles {">"}
                  {">"}
                </p>
              </Col>
            </Row>
          </div>
        </section>

        {/* PROJECTS */}
        <div>
          {/* ROW: 1 */}
          <Row>
            <h5>Projects</h5>
            <Col
              lg={8}
              style={{
                borderLeft: "5px solid red",
                backgroundColor: "#1c2c35",
                padding: "30px",
                margin: "10px",
                marginTop: "30px",
                borderRadius: "7px",
              }}
            >
              <h6>Yawnch</h6>
              <p>
                An online coworking community for indie hackers, entreprenuers,
                and founders. Chat live with app developers, designers, and
                mentors. Access video courses and tutorials.
              </p>

              <Button
                variant="outline-light"
                style={{
                  paddingLeft: css.buttonPadding,
                  paddingRight: css.buttonPadding,
                }}
              >
                Button
              </Button>
            </Col>
          </Row>

          {/* ROW: 2 */}
          <Row style={{ marginTop: "20px", marginBottom: "40px" }}>
            <Col
              lg={4}
              style={{
                borderLeft: "5px solid purple",
                backgroundColor: "#1c2c35",
                padding: "30px",
                margin: "10px",
                borderRadius: "7px",
              }}
            >
              <h6>Stockstream.tv</h6>
              <p>
                On a mission to democratize investing knowledge. My partner and
                I bootstrapped this company with zero funding.
              </p>
              <Button
                variant="outline-light"
                style={{
                  paddingLeft: css.buttonPadding,
                  paddingRight: css.buttonPadding,
                }}
              >
                Button
              </Button>
            </Col>
            <Col
              lg={4}
              style={{
                borderLeft: "5px solid yellow",
                backgroundColor: "#1c2c35",
                padding: "30px",
                margin: "10px",
                borderRadius: "7px",
              }}
            >
              <h6>All Turtles</h6>
              <p>
                I lead web development full time at All Turtles, an AI startup
                studio
              </p>
              <Button
                variant="outline-light"
                style={{
                  marginTop: "23px",
                  paddingLeft: css.buttonPadding,
                  paddingRight: css.buttonPadding,
                }}
              >
                Button
              </Button>
            </Col>
          </Row>
        </div>
      </div>

      {/* CONTACT */}
      <section
        style={{
          marginTop: "50px",
          marginBottom: "50px",
          paddingBottom: "70px",
          backgroundColor: css.contactBg,
        }}
      >
        <h2
          style={{
            color: css.contactBtn,
            fontWeight: "bold",
            paddingTop: "80px",
            fontSize: "40px",
          }}
        >
          What are you working on?
        </h2>
        <p style={{ padding: "20px" }}>
          Let's have a conversation! I'd love to hear about what you're{" "}
          <p> working on and find a way to work together.</p>
        </p>
        <Button
          style={{
            backgroundColor: css.contactBtn,
            color: "black",
            fontWeight: "bold",
            paddingLeft: "25px",
            paddingRight: "25px",
          }}
          variant="outline-success"
        >
          Chat
        </Button>{" "}
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
