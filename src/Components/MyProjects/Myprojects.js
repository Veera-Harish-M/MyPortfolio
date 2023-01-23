import React from "react";
import Section1 from "./section1";
import Section2 from "./section2";
import "./Myprojects.css";
import Section3 from "./section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";

import BackgroundProject from "../../asserts/backgrounds/projects.png";
import BackgroundProjectMin from "../../asserts/backgrounds/projects-mobile.png";
export default function Myprojects() {
  return (
    <div
      style={
        window.innerWidth < 450
          ? { backgroundImage: `url(${BackgroundProjectMin})` }
          : { backgroundImage: `url(${BackgroundProject})` }
      }
      className="myProjects"
    >
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
}
