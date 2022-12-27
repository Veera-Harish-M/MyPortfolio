import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Atlan from "../../asserts/atlan2.png";

import Logo from "../../asserts/logo.png";

import { FaNodeJs, FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { GiUfo, GiEarthAfricaEurope, GiGraduateCap } from "react-icons/gi";
import { HiOutlineSparkles } from "react-icons/hi";
import { SiTata } from "react-icons/si";

import "./timeline.css";
import {
  babyIcon,
  bookIcon,
  codeIcon,
  computerIcon,
  developerIcon,
  forkIcon,
} from "../../icons/icons";

export default function Timeline() {
  var iconStyleCustom = {
    display: "flex",
    background: "rgba(0,0,0,.8)",
    color: "#fff",
    boxShadow:
      " 0 0 0 4px #79e2fb70, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)",
    alignItems: "center",
    justifyContent: "center",
  };

  var contentStyleCustom = {
    color: "#b0eefd",
    background: "rgb(0 62 175 / 31%)",
    boxShadow: "rgb(154 184 229 / 35%) 4px 4px 24px",
  };
  var contentArrowStyleCustom = { borderRight: "7px solid  rgba(0,0,0,.5)" };

  return (
    <div
      style={{
        background: `url(${Atlan})`,
        "--line-color": "transparent",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        width: "100%",
      }}
    >
      <div className="title">Life of Veera</div>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={contentStyleCustom}
          contentArrowStyle={contentArrowStyleCustom}
          date="2000s"
          iconStyle={iconStyleCustom}
          icon={babyIcon}
        >
          <h4 className="vertical-timeline-element-title">
            <GiUfo
              style={{ marginLeft: "5px", marginRight: "5px" }}
              size={30}
            />
            Entry to the planet Earth
            <GiEarthAfricaEurope
              style={{ marginLeft: "5px", marginRight: "5px" }}
              size={30}
            />
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="2015-17"
          contentStyle={contentStyleCustom}
          contentArrowStyle={contentArrowStyleCustom}
          iconStyle={iconStyleCustom}
          icon={bookIcon}
        >
          <h4 className="vertical-timeline-element-title">High School</h4>
          <p>
            First spark{" "}
            <HiOutlineSparkles
              style={{ marginLeft: "5px", marginRight: "5px" }}
              size={20}
            />
            of programming
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="2017-21"
          contentStyle={contentStyleCustom}
          contentArrowStyle={contentArrowStyleCustom}
          iconStyle={iconStyleCustom}
          icon={computerIcon}
        >
          <h4 className="vertical-timeline-element-title">
            <GiGraduateCap
              style={{ marginLeft: "5px", marginRight: "5px" }}
              size={30}
            />
            Bachelor Of Computer Science
          </h4>
          <p>
            Realizing Application Development... <br />
            Android Development, MERN Stack
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2020-21"
          contentStyle={contentStyleCustom}
          contentArrowStyle={contentArrowStyleCustom}
          iconStyle={iconStyleCustom}
          icon={codeIcon}
        >
          <h4 className="vertical-timeline-element-title">Internships</h4>
          <p style={{ paddingLeft: "10px" }}>
            <span>
              <h5 style={{ marginBottom: "15px" }}>Front End Developer</h5>
              <FaReact
                style={{ marginLeft: "5px", marginRight: "5px" }}
                size={30}
              />
              <span style={{ padding: "5px" }}>
                Steerclear Tech Solutions - Chennai (Apr20 to Jul20)
              </span>
            </span>
            <br />
            <span>
              <h5 style={{ marginBottom: "15px", marginTop: "15px" }}>
                Full-Stack developer
              </h5>
              <FaNodeJs
                style={{ marginLeft: "5px", marginRight: "5px" }}
                size={30}
              />
              <span style={{ padding: "5px" }}>
                ezPalate - Singapore (Jul 2020 to Sep 2020)
              </span>
            </span>
            <br />
            <span>
              <h5 style={{ marginBottom: "15px", marginTop: "15px" }}>
                React Native Developer
              </h5>
              <TbBrandReactNative
                style={{ marginLeft: "5px", marginRight: "5px" }}
                size={30}
              />
              <span style={{ padding: "5px" }}>
                CodeSirpi Software LLP (Apr 2021 to May 2021)
              </span>
            </span>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="2021-22"
          contentStyle={contentStyleCustom}
          contentArrowStyle={contentArrowStyleCustom}
          iconStyle={iconStyleCustom}
          icon={developerIcon}
        >
          <h4 className="vertical-timeline-element-title">
            EDL & Tableau Developer
          </h4>
          <h5 style={{ marginBottom: "15px", marginTop: "15px" }}>
            <SiTata
              style={{ marginLeft: "5px", marginRight: "5px" }}
              size={30}
            />
            Tata Consultancy Services - Kochi
          </h5>
          <p>Analytics & Insights </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="2022-24"
          contentStyle={contentStyleCustom}
          contentArrowStyle={contentArrowStyleCustom}
          iconStyle={iconStyleCustom}
          icon={forkIcon}
        >
          <h4 className="vertical-timeline-element-title">
            Master of Computer Science
          </h4>
          <h5 style={{ marginBottom: "15px", marginTop: "15px" }}>
            <img
              src={Logo}
              alt="logo"
              style={{ height: "45px", marginRight: "10px" }}
            />
            National Institute of Technology, Puduchery
          </h5>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
