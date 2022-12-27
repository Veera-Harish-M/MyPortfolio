import React, { Component } from "react";
import printer from "../../asserts/printer.mp4";
import { BsGithub } from "react-icons/bs";

export default class Section3 extends Component {
  render() {
    return (
      <div style={{ position: "absolute" }}>
        <video
          style={{ width: "100%", marginTop: "310vh" }}
          src={printer}
          type="video/mp4"
          autoPlay={true}
          loop
          muted
        ></video>
        <div
          style={{
            marginRight: "40px",
            color: "rgba(161, 161, 161, 0.5)",
            textAlign: "right",
          }}
        >
          <b className="textTrans" style={{ fontSize: "95px" }}>
            Ecommerce Website
          </b>
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
