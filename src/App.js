import "./App.css";
import React from "react";
import AnimatedCursor from "react-animated-cursor";
import Loading from "./Components/Loading/Loading";
import { Suspense } from "react";
// import { useEffect } from "react";
// import { useState } from "react";

const MyprojectsComponent = React.lazy(() =>
  import("./Components/MyProjects/Myprojects")
);
const NavigbarComponent = React.lazy(() =>
  import("./Components/Navbar/Navigbar")
);
const BannerComponent = React.lazy(() => import("./Components/Banner/Banner"));
const TimelineComponent = React.lazy(() =>
  import("./Components/Timeline/Timeline")
);
const AboutMeComponent = React.lazy(() =>
  import("./Components/AboutME/AboutMe")
);
const LandingComponent = React.lazy(() =>
  import("./Components/Landing/Landing")
);

export default function App() {
  // const [compVisibility, setCompVisibility] = useState(false);
  // useEffect(() => {
  //   if (window.innerWidth > 700) {
  //     setInterval(() => {
  //       if (
  //         document
  //           .getElementsByClassName("splineDiv")[0]
  //           .getElementsByTagName("canvas")[0].style.display === "block"
  //       ) {
  //         setTimeout(() => {}, 1000);
  //         setCompVisibility(true);
  //       }
  //     }, 1000);
  //   }
  //   // eslint-disable-next-line
  // }, []);

  return (
    <Suspense fallback={<Loading />}>
      {/* {window.innerWidth > 700 && !compVisibility && <Loading />} */}
      <div
        // style={
        //   window.innerWidth > 700
        //     ? compVisibility
        //       ? {}
        //       : { visibility: "hidden" }
        //     : {}
        // }
        className="App"
      >
        <AnimatedCursor
          innerSize={20}
          outerSize={40}
          color="193, 11, 111"
          outerAlpha={0.4}
          innerScale={0.8}
          outerScale={2}
        />
        <NavigbarComponent />
        <LandingComponent />
        <BannerComponent />
        <TimelineComponent />
        <MyprojectsComponent />
        <AboutMeComponent />
      </div>
    </Suspense>
  );
}
