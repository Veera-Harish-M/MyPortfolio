// import Spline from "@splinetool/react-spline";

import ReactTypingEffect from "react-typing-effect";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="Landing">
      <div className="allText">
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

        {/* <div className="splineDiv">
          <Spline scene="https://prod.spline.design/aEFkVSb5NI1piSHi/scene.splinecode" />
        </div> */}
      </div>
    </div>
  );
}
