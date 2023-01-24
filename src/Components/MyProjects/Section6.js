import React from "react";
import "./Section6.css";

import BackgroundSection6 from "../../asserts/backgrounds/section6.png";

export default function Section6() {
  return (
    <div
      className="section6"
      style={{ backgroundImage: `url(${BackgroundSection6})` }}
    >
      <div
        className="projectTextName"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="linear"
      >
        <b className="textTrans">See My Other Works!</b>
      </div>
      <div className="subsection6">
        <div className="outerdiv">
          <div className="innerdiv">
            <a
              href="https://netflix-clone-veera.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="div1 eachdiv"
            >
              <div className="userdetails">
                <div className="imgbox">
                  <img
                    src={require("../../asserts/project/logo/react_icon.png")}
                    alt="react"
                  />
                </div>
                <div className="review">
                  <h4>Netflix clone</h4>
                  <p>"Responsive Netflix clone UI design"</p>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/Veera-Harish-M/OffensiveWord-Blocking-Keyboard"
              target="_blank"
              rel="noopener noreferrer"
              className="div2 eachdiv"
            >
              <div className="userdetails">
                <div className="imgbox">
                  <img
                    src={require("../../asserts/project/logo/android_studio.webp")}
                    alt="android"
                  />
                </div>

                <div className="review">
                  <h4>Keyboard App </h4>
                  <p>"Virtual Keyboard for blocking offensive words"</p>
                </div>
              </div>
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="div3 eachdiv"
            >
              <div className="userdetails">
                <div className="imgbox">
                  <img
                    src={require("../../asserts/project/logo/javascript.png")}
                    alt="js"
                  />
                </div>

                <div className="review dark">
                  <h4>College Admission Form</h4>
                  <p>
                    “ Application form for college students entry with phone
                    number OTP based verification ”
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://github.com/Veera-Harish-M/AUBooks"
              target="_blank"
              rel="noopener noreferrer"
              className="div4 eachdiv"
            >
              <div className="userdetails">
                <div className="imgbox">
                  <img
                    src={require("../../asserts/project/logo/android_studio.webp")}
                    alt="android"
                  />
                </div>

                <div className="review dark">
                  <h4>Books App for AU</h4>
                  <p>“A books reading app for Anna university Students.”</p>
                </div>
              </div>
            </a>
            <a
              href="https://github.com/Veera-Harish-M/trello-clone"
              target="_blank"
              rel="noopener noreferrer"
              className="div5 eachdiv"
            >
              <div className="userdetails">
                <div className="imgbox">
                  <img
                    src={require("../../asserts/project/logo/react_icon.png")}
                    alt="react"
                  />
                </div>

                <div className="review">
                  <h4>Trello Clone</h4>
                  <p>“Responsive Trello clone UI design."</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="outerdiv" style={{ marginTop: "-80px" }}>
          <div className="innerdiv">
            <a
              href="https://ezpalate.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="div1-1 eachdiv"
            >
              <div style={{ background: "black" }}></div>
              <div className="userdetails">
                <div className="imgbox">
                  <img
                    src={require("../../asserts/project/logo/react_icon.png")}
                    alt="react"
                  />
                </div>

                <div className="review">
                  <h4>Food Delivery Application</h4>
                  <p>
                    “A Food delivery Marketing Website and Dashboard for Chefs,
                    Delivery boy, Admin.”
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/Veera-Harish-M/deepfake_detection"
              target="_blank"
              rel="noopener noreferrer"
              className="div2-2 eachdiv"
            >
              <div className="userdetails">
                <div className="imgbox">
                  <img
                    src={require("../../asserts/project/logo/ml.png")}
                    alt="ML"
                  />
                </div>

                <div className="review">
                  <h4>Deepfake Detection</h4>
                  <p>
                    “Detection deep fake images using EfficientNetB4
                    Architecture.”
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://tdca.in/#/"
              target="_blank"
              rel="noopener noreferrer"
              className="div3-3 eachdiv"
            >
              <div className="userdetails">
                <div className="imgbox">
                  <img
                    src={require("../../asserts/project/logo/react_icon.png")}
                    alt="react"
                  />
                </div>

                <div className="review dark">
                  <h4>TDCA Cricket App</h4>
                  <p>“Scoring App for Admin and End user Cricketing App.”</p>
                </div>
              </div>
            </a>
            <a
              href="https://github.com/Veera-Harish-M/opencv"
              target="_blank"
              rel="noopener noreferrer"
              className="div4-4 eachdiv"
            >
              <div className="userdetails">
                <div className="imgbox">
                  <img
                    src={require("../../asserts/project/logo/python_logo.webp")}
                    alt="python"
                  />
                </div>

                <div className="review dark">
                  <h4>Image Processing</h4>
                  <p>“Image Processing Techniques using opencv.”</p>
                </div>
              </div>
            </a>
            <a
              href="https://codewrestling-intern.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="div5-5 eachdiv"
            >
              <div className="userdetails">
                <div className="imgbox">
                  <img
                    src={require("../../asserts/project/logo/react_icon.png")}
                    alt="react"
                  />
                </div>
                <div className="review">
                  <h4>Video Player Application</h4>
                  <p>“Youtube like video player UI.”</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
