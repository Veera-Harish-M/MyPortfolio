import Spline from "@splinetool/react-spline";
import { React } from "react";
import ReactTypingEffect from "react-typing-effect";
import "./Landing.css";
import LandingBackground from "../../asserts/backgrounds/landing.png";
import LandingBackgroundMin from "../../asserts/backgrounds/landing-mobile.png";

const splineUrl =
  "https://prod.spline.design/aEFkVSb5NI1piSHi/scene.splinecode";

export default function Landing() {
  return (
    <div className="Landing" id="HomeSpot">
      <div
        className="allText"
        style={
          window.innerWidth < 450
            ? { backgroundImage: `url(${LandingBackgroundMin})` }
            : { backgroundImage: `url(${LandingBackground})` }
        }
      >
        <div className="text-effect-box">
          <h1 className="name-text">I'm Veera Harish</h1>
          <h1 className="name-text1">I'm Veera Harish</h1>
          <h1 className="name-text">Muthazhagu</h1>
          <h1 className="name-text1">Muthazhagu</h1>

          <ReactTypingEffect
            className="typing-effect-text"
            typingDelay="500"
            eraseDelay="500"
            eraseSpeed="100"
            text={[
              "Full Stack Developer",
              "Web Developer",
              "Web Designer",
              "Frontend Developer",
              "Graphic Designer",
            ]}
          />
        </div>
        {window.innerWidth > 700 && (
          <div className="splineDiv">
            <Spline scene={splineUrl} />
          </div>
        )}
      </div>
    </div>
  );
}
