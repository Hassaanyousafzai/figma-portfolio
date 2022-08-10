import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { css } from "./CssFile";
import Footer from "./Footer";
// import NavBar from "./NavBar";

export default function Articles() {
  return (
    <>
      {/* <NavBar /> */}
      <div className="container" style={{ textAlign: "left", padding: "80px" }}>
        <h1 style={{ marginBottom: "30px" }}>Articles</h1>
        <Row>
          <Col lg={8}>
            <div style={{ marginBottom: "70px", marginTop: "50px" }}>
              <span
                style={{
                  color: css.articleSpan,
                  fontSize: css.articleSpanSize,
                }}
              >
                September 08, 2019
              </span>
              <h4>
                Code splitting and lazy loading a server side rendered React App
              </h4>
              <span>
                Reasoning, approach, and Goals Faster intial load times. Users
                only download the code they need for the features they are
                using. This...
              </span>

              <p
                style={{
                  color: css.articleSpan,
                  fontSize: css.articleSpanSize,
                }}
              >
                Read more...
              </p>
            </div>

            <div style={{ marginBottom: "70px", marginTop: "50px" }}>
              <span
                style={{
                  color: css.articleSpan,
                  fontSize: css.articleSpanSize,
                }}
              >
                September 08, 2019
              </span>
              <h4>
                Easy project switching with Itermocil {"&"} Command line
                shortcuts
              </h4>
              <span>
                Reasoning, approach, and Goals Faster intial load times. Users
                only download the code they need for the features they are
                using. This...
              </span>

              <p
                style={{
                  color: css.articleSpan,
                  fontSize: css.articleSpanSize,
                }}
              >
                Read more...
              </p>
            </div>

            <div style={{ marginBottom: "70px", marginTop: "50px" }}>
              <span
                style={{
                  color: css.articleSpan,
                  fontSize: css.articleSpanSize,
                }}
              >
                September 08, 2019
              </span>
              <h4>
                Code splitting and lazy loading a server side rendered React App
              </h4>
              <span>
                Reasoning, approach, and Goals Faster intial load times. Users
                only download the code they need for the features they are
                using. This...
              </span>

              <p
                style={{
                  color: css.articleSpan,
                  fontSize: css.articleSpanSize,
                }}
              >
                Read more...
              </p>
            </div>

            <div style={{ marginBottom: "70px", marginTop: "50px" }}>
              <span
                style={{
                  color: css.articleSpan,
                  fontSize: css.articleSpanSize,
                }}
              >
                September 08, 2019
              </span>
              <h4>
                Easy project switching with Itermocil {"&"} Command line
                shortcuts
              </h4>
              <span>
                Reasoning, approach, and Goals Faster intial load times. Users
                only download the code they need for the features they are
                using. This...
              </span>

              <p
                style={{
                  color: css.articleSpan,
                  fontSize: css.articleSpanSize,
                }}
              >
                Read more...
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <Footer />
    </>
  );
}
