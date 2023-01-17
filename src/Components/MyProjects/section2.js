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
            src={require("../../asserts/project/section2/message1.png")}
            alt="app demo-1 border"
          />
        </div>
        <div data-aos="fade-up-right" data-aos-duration="1000">
          <img
            className="phoneTwo"
            src={require("../../asserts/project/section2/message2.png")}
            alt="app demo-1 border"
          />
        </div>
        <div className="textProjectName">
          <b className="textTrans">
            Message <br />
            Translator
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
