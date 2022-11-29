import Spline from "@splinetool/react-spline";
import AnimatedCursor from "react-animated-cursor";
import ReactTypingEffect from "react-typing-effect";
import "./Landing.css";
export default function Landing() {
  return (
    <div className="Landing">
      <AnimatedCursor
        innerSize={20}
        outerSize={40}
        color="193, 11, 111"
        outerAlpha={0.4}
        innerScale={0.8}
        outerScale={2}
      />
      <div style={{ width: "100%", height: "100vh" }}>
        <div className="text-effect-box">
          <h1 className="name-text">I'm Veera Harish Muthazhagu</h1>
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
        <Spline scene="https://prod.spline.design/zOu8G4DzoCCOlT7m/scene.splinecode" />
      </div>
    </div>
  );
}
