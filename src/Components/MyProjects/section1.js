import React, { Component } from "react";
import "./section1.css";
import AOS from "aos";
import "aos/dist/aos.css";
import transcoder from "../../asserts/project/section1/transcoder-video.mp4";
import { BsGithub } from "react-icons/bs";

export default class Section1 extends Component {
  componentDidMount() {
    AOS.init();
    AOS.refresh();
  }
  render() {
    return (
      <div className="sectionProject1">
        <div className="getlink">
          <div className="getlinktext">
            <div className="myWorks">
              <b className="my">My</b>
              <b className="works">Works!</b>
            </div>
          </div>

          <div className="projectName">
            <b className="textTrans">Transcoder</b>
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

          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="2000"
            className="iphone-1"
          >
            <video
              className="iphone-1-content"
              src={transcoder}
              type="video/mp4"
              autoPlay={true}
              loop
              muted
            ></video>
            <img
              src={require("../../asserts/project/section1/iphone-frame.png")}
              alt="app demo-1 border"
              className="iphone-1-border"
            />
          </div>

          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
            className="androidphone"
          >
            <img
              src={require("../../asserts/project/section1/transcoder-image.jpg")}
              className="androidphone-content"
              alt="iphone Wallpaper"
            />
            <img
              src={require("../../asserts/project/section1/android-frame.png")}
              alt="app demo-2 border"
              className="androidphone-border"
            />
          </div>
        </div>
      </div>
    );
  }
}
