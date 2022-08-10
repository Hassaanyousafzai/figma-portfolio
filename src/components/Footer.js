import React from "react";
import twitterLogo from "./Assets/Twitter.png";
import gitHubLogo from "./Assets/GitHub.png";
import dribbbleLogo from "./Assets/Dribbble.png";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default function Footer() {
  return (
    <div>
      <div className="container">
        <Row>
          <Col lg={8} style={{ textAlign: "left", paddingBottom: "20px" }}>
            <p>Designed and Developed by Hassaan Yousafzai</p>
            <p>Built with ReactJS, Hosted by GitHub</p>
          </Col>
          <Col lg={4} className="my-4">
            <img src={twitterLogo} alt="TwitterLogo" className="mx-3" />
            <img src={gitHubLogo} alt="gitHubLogo" className="mx-3" />
            <img src={dribbbleLogo} alt="dribbbleLogo" className="mx-3" />
          </Col>
        </Row>
      </div>
    </div>
  );
}
