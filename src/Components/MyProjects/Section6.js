import React, { Component } from "react";
import "./Section6.css";
import { BsGithub } from "react-icons/bs";

export default class Section6 extends Component {
  render() {
    return (
      <div
        className="section6"
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-easing="linear"
      >
        <div className="container">
          <div className="card">
            <a
              style={{ height: "100%" }}
              href="https://github.com/Veera-Harish-M/OffensiveWord-Blocking-Keyboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../../asserts/projects/proj2.jpg")}
                alt="projects"
              />
              <div className="card__head">
                Offensive Words Blocking Keyboard
              </div>
            </a>
          </div>
          <div className="card">
            <a
              style={{ height: "100%" }}
              href="https://github.com/Veera-Harish-M/AUBooks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../../asserts/projects/proj1.jpg")}
                alt="projects"
              />
              <div className="card__head">Books App for AU Students</div>
            </a>
          </div>
          <div className="card">
            <a
              style={{ height: "100%" }}
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../../asserts/projects/proj3.png")}
                alt="projects"
              />
              <div className="card__head">College Application Form</div>
            </a>
          </div>
          <div className="card">
            <a
              style={{ height: "100%" }}
              href="https://github.com/Veera-Harish-M/netflix-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../../asserts/projects/proj4.png")}
                alt="projects"
              />
              <div className="card__head">Netflix UI Clone</div>
            </a>
          </div>
          <div className="card">
            <a
              style={{ height: "100%" }}
              href="https://github.com/Veera-Harish-M/trello-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../../asserts/projects/proj5.png")}
                alt="projects"
              />
              <div className="card__head">Trello Clone</div>
            </a>
          </div>
        </div>
        <div
          style={{
            color: "rgba(161, 161, 161, 0.5)",
            position: "absolute",
            left: "161px",
            top: "520px",
          }}
        >
          <b className="textTrans" style={{ fontSize: "95px" }}>
            Other Works
          </b>
          <b style={{ fontSize: "30px", marginLeft: "30px" }}>
            Click & View GitHub
          </b>

          <BsGithub
            className="github"
            size={33}
            style={{
              marginTop: "-18px",
              marginLeft: "5px",
            }}
            color="rgb(255 255 255 / 50%)"
          />
        </div>
      </div>
    );
  }
}
