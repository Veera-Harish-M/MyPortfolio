import React, { Component } from "react";
import { BsGithub } from "react-icons/bs";
import "./section5.css";
export default class Section5 extends Component {
  render() {
    return (
      <div className="section5">
        <div
          data-aos="fade-up-right"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          <img
            className="image1"
            src={require("../../asserts/mobile123.png")}
            alt="project-Image1"
          />
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-duration="2000"
          data-aos-easing="linear"
        >
          <img
            className="image2"
            src={require("../../asserts/mobile1231.png")}
            alt="project-Image2"
          />
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-duration="3000"
          data-aos-easing="linear"
        >
          <img
            className="image3"
            src={require("../../asserts/mobile1232.png")}
            alt="project-Image3"
          />
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-duration="4000"
          data-aos-easing="linear"
        >
          <img
            className="image4"
            src={require("../../asserts/mobile1233.png")}
            alt="project-Image4"
          />
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-duration="3000"
          data-aos-easing="linear"
        >
          <img
            className="image5"
            src={require("../../asserts/mobile1234.png")}
            alt="project-Image5"
          />
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-duration="2000"
          data-aos-easing="linear"
        >
          <img
            className="image6"
            src={require("../../asserts/mobile1235.png")}
            alt="project-Image6"
          />
        </div>
        <div className="projectTextName">
          <b className="textTrans">
            Automatic
            <br />
            Attendance
          </b>
          <br />
          <a
            href="https://github.com/Veera-Harish-M/Attendance-Manager"
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
