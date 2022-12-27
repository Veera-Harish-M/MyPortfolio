import React, { Component } from "react";
import "./Section7.css";

export default class Section7 extends Component {
  render() {
    return (
      <div
        className="section7"
        data-aos="fade-left"
        data-aos-duration="2000"
        data-aos-easing="linear"
      >
        <div className="container">
          <div className="card">
            <a
              style={{ height: "100%" }}
              href="https://ezpalate.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../../asserts/projects/proj6.png")}
                alt="projects"
              />
              <div className="card__head">E-commerce Food Delivery App </div>
            </a>
          </div>

          <div className="card">
            <a
              style={{ height: "100%" }}
              href="https://codewrestling-intern.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../../asserts/projects/proj7.png")}
                alt="projects"
              />
              <div className="card__head">Video Player App</div>
            </a>
          </div>
          <div className="card">
            <a
              style={{ height: "100%" }}
              href="https://tdca.in/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../../asserts/projects/proj8.png")}
                alt="projects"
              />
              <div className="card__head">TDCA Cricket App</div>
            </a>
          </div>
          <div className="card">
            <a
              style={{ height: "100%" }}
              href="https://github.com/Veera-Harish-M/opencv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../../asserts/projects/proj9.jpg")}
                alt="projects"
              />
              <div className="card__head">Image Processing-opencv</div>
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
                src={require("../../asserts/projects/proj10.webp")}
                alt="projects"
              />
              <div className="card__head">Deepfake Detection</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
