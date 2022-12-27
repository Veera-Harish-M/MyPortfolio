import React, { Component } from "react";
import { BsGithub } from "react-icons/bs";

export default class Section5 extends Component {
  render() {
    return (
      <div style={{ position: "absolute", marginTop: "650vh" }}>
        <div
          data-aos="fade-up-right"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          <img
            style={{ position: "absolute", top: "193px", left: "-320px" }}
            src={require("../../asserts/mobile123.png")}
            alt="app demo-1 border"
          />
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-duration="2000"
          data-aos-easing="linear"
        >
          <img
            style={{ position: "absolute", top: "-203px", left: "315px" }}
            src={require("../../asserts/mobile1231.png")}
            alt="app demo-1 border"
          />
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-duration="3000"
          data-aos-easing="linear"
        >
          <img
            style={{ position: "absolute", top: "-3px", left: "309px" }}
            src={require("../../asserts/mobile1232.png")}
            alt="app demo-1 border"
          />
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-duration="4000"
          data-aos-easing="linear"
        >
          <img
            style={{ position: "absolute" }}
            src={require("../../asserts/mobile1233.png")}
            alt="app demo-1 border"
          />
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-duration="3000"
          data-aos-easing="linear"
        >
          <img
            style={{ position: "absolute", top: "190px" }}
            src={require("../../asserts/mobile1234.png")}
            alt="app demo-1 border"
          />
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-duration="2000"
          data-aos-easing="linear"
        >
          <img
            style={{ position: "absolute" }}
            src={require("../../asserts/mobile1235.png")}
            alt="app demo-1 border"
          />
        </div>
        <div
          style={{
            color: "rgba(161, 161, 161, 0.5)",
            textAlign: "right",
            position: "absolute",
            left: "688px",
            top: "137px",
          }}
        >
          <b className="textTrans" style={{ fontSize: "95px" }}>
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
