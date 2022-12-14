import React from "react";
import "./banner.css";
import bgvideo from "../../asserts/viddd.mp4";
export default function Banner() {
  const position = document.documentElement;
  window.addEventListener("scroll", (e) => {
    console.log(window.screenY);
    position.style.setProperty("--x", window.scrollY + "px");
  });

  return (
    <section className="sectionClass">
      <video
        className="background-video"
        src={bgvideo}
        type="video/mp4"
        autoPlay={true}
        loop
        muted
      ></video>
      <div className="text">
        <h2 style={{ "--i": "0.5" }}>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
        </h2>
        <h2 style={{ "--i": "1.5" }}>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
        </h2>
        <h2 style={{ "--i": "2.5" }}>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
        </h2>
        <h2 style={{ "--i": "1.25" }}>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
        </h2>
        <h2 style={{ "--i": "0.75" }}>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
        </h2>
        <h2 style={{ "--i": "0.3" }}>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
        </h2>
        <h2 style={{ "--i": "2.25" }}>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
        </h2>
        <h2 style={{ "--i": "0.5" }}>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
        </h2>
        <h2 style={{ "--i": "1.5" }}>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
        </h2>
        <h2 style={{ "--i": "2.5" }}>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
        </h2>
        <h2 style={{ "--i": "1.25" }}>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
          <span>Let's Deep Dive</span>
        </h2>
      </div>
    </section>
  );
}
