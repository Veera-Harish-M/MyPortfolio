import React, { Component } from "react";
import "./section2.css";
import { BsGithub } from "react-icons/bs";

export class Section2 extends Component {
  render() {
    return (
      <div className="section2">
        <div data-aos="fade-up-right" data-aos-duration="2000">
          <img
            className="phoneOne"
            src={require("../../asserts/message1.png")}
            alt="app demo-1 border"
          />
        </div>
        <div data-aos="fade-up-right" data-aos-duration="1000">
          <img
            className="phoneTwo"
            src={require("../../asserts/message2.png")}
            alt="app demo-1 border"
          />
        </div>
        <div
          style={{
            position: "absolute",
            left: "593px",
            top: "429px",
            color: "rgba(161, 161, 161, 0.5)",
            textAlign: "right",
            zIndex: 1,
          }}
        >
          <b className="textTrans" style={{ fontSize: "95px" }}>
            Message Translator
          </b>
          <br />
          <a
            href="https://github.com/Veera-Harish-M/Transcoder/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub
              className="github"
              size={40}
              color="rgb(255 255 255 / 50%)"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Section2;
