import Spline from "@splinetool/react-spline";

import ReactTypingEffect from "react-typing-effect";
import "./Landing.css";
import back1 from "../../asserts/b1.png";
import back2 from "../../asserts/b2.png";
import back3 from "../../asserts/b3.png";
import back4 from "../../asserts/b4.png";
import back from "../../asserts/backship2.png";

export default function Landing() {
  return (
    <div className="Landing">
      <div
        className="allText"
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${back1}),url(${back2}),url(${back3}),url(${back4}),url(${back})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
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

        {/* <Spline scene="https://draft.spline.design/WBT5Oifjwvkl6IPJ/scene.splinecode" /> */}
      </div>
    </div>
  );
}
