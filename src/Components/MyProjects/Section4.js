import React, { Component } from "react";
import { BsGithub, BsFillArrowUpRightCircleFill } from "react-icons/bs";
import "./section4.css";
import BackgroundSection4 from "../../asserts/backgrounds/section4.png";
export default class Section4 extends Component {
  render() {
    return (
      <div
        className="section4"
        style={{ backgroundImage: `url(${BackgroundSection4})` }}
      >
        <div
          data-aos="fade-up-right"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          <img
            className="image1"
            src={require("../../asserts/project/section4/section4-laptop.png")}
            alt="app demo-1 border"
          />
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-duration="4000"
          data-aos-easing="linear"
        >
          <img
            className="image2"
            src={require("../../asserts/project/section4/section4-mobile.png")}
            alt="app demo-1 border"
          />
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-duration="6000"
          data-aos-easing="linear"
        >
          <img
            className="image3"
            src={require("../../asserts/project/section4/section4-tab.png")}
            alt="app demo-1 border"
          />
        </div>
        <div className="projectNameText">
          <b className="textTrans">
            Application <br />
            Wingman
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
