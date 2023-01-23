import React, { Component } from "react";
import Footer from "../Footer/Footer";
import "./AboutMe.css";
import BackgroundAboutMe from "../../asserts/backgrounds/aboutme.png";
import MyPhoto from "../../asserts/me.png";
export default class AboutMe extends Component {
  render() {
    return (
      <div
        className="aboutme"
        style={{
          width: "100%",
          position: "absolute",
          marginTop: "150px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "blue",
          backgroundImage: `url(${BackgroundAboutMe})`,
        }}
      >
        <div className="wrapper" style={{ backgroundImage: `url(${MyPhoto})` }}>
          <div className="name">Veera Harish</div>
          <div className="content">
            <h2>About me</h2>
            <p>
              <br />
              Hey There! A small gist about me! <br />
              My schooling life is filled with pleasant memories.. One of it is,
              I decided to be a software developer. So I stepped into the
              computer science major and learned programming languages. I like
              writing python programs. I always prefer solving a challenge with
              python than other programming languages.
              <br />
              <br />
              Days Passed...
              <br />I learnt android development. To make my app cross-platform,
              I dived into Reactjs. I love working on React apps. Added to
              React, I acquired knowledge in MongoDB, Expressjs, Nodejs,
              Bootstrap and some other related modules. React Native gave me
              confident to build cross-platform application.
            </p>
            <p>
              I did projects to grow my knowledge in my Bachelor.. Did
              Interships and landed into job at TCS.
              <br />I felt something lacking...Decided to gather more
              knowledge..Currently Pursuing Masters in NITPY. Learning Journey
              Continues....
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
