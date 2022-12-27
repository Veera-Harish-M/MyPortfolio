import Landing from "./Components/Landing/Landing";
import "./App.css";
import Myprojects from "./Components/MyProjects/Myprojects";

import Navigbar from "./Components/Navbar/Navigbar";
import AnimatedCursor from "react-animated-cursor";
import Banner from "./Components/Banner/Banner";
import Timeline from "./Components/Timeline/Timeline";
import AboutMe from "./Components/AboutME/AboutMe";

export default function App() {
  return (
    <div>
      <AnimatedCursor
        innerSize={20}
        outerSize={40}
        color="193, 11, 111"
        outerAlpha={0.4}
        innerScale={0.8}
        outerScale={2}
      />
      <Navigbar />
      <Landing />
      <Banner />
      <Timeline />
      <Myprojects />
      <AboutMe />
    </div>
  );
}
