import React, { Component } from "react";
import { BsGithub, BsFillArrowUpRightCircleFill } from "react-icons/bs";

export default class Section4 extends Component {
  render() {
    return (
      <div style={{ position: "absolute", marginTop: "470vh" }}>
        <div
          data-aos="fade-up-right"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          <img
            style={{ position: "absolute" }}
            src={require("../../asserts/laptop.png")}
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
            src={require("../../asserts/mobile.png")}
            alt="app demo-1 border"
          />
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-duration="6000"
          data-aos-easing="linear"
        >
          <img
            style={{ position: "absolute" }}
            src={require("../../asserts/tab.png")}
            alt="app demo-1 border"
          />
        </div>
        <div
          style={{
            color: "rgba(161, 161, 161, 0.5)",
            textAlign: "right",
            position: "absolute",
            marginTop: "415px",
            marginLeft: "613px",
          }}
        >
          <b className="textTrans" style={{ fontSize: "95px" }}>
            Application Wingman
          </b>
          <br />
          <a
            style={{ marginRight: "20px" }}
            href="https://github.com/Veera-Harish-M/application-wingman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFillArrowUpRightCircleFill
              className="github"
              size={40}
              color="rgb(255 255 255 / 50%)"
            />
          </a>

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
