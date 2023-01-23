import React, { Component } from "react";
import printer from "../../asserts/project/section3/section3-video.mp4";
import { BsGithub } from "react-icons/bs";
import "./section3.css";
import BackgroundSection3 from "../../asserts/backgrounds/section3.png";

export default class Section3 extends Component {
  render() {
    return (
      <div
        className="section3"
        style={{ backgroundImage: `url(${BackgroundSection3})` }}
      >
        <video
          style={{ width: "100%" }}
          src={printer}
          type="video/mp4"
          autoPlay={true}
          loop
          muted
        ></video>
        <div className="projectText">
          <b className="textTrans">Ecommerce Website</b>
          <br />
          <a
            href="https://github.com/Veera-Harish-M/printing_press"
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
