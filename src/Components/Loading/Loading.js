import React, { useEffect, useState } from "react";
import "./Landing.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Img1 from "../../asserts/loadingImg/load1.png";
import Img2 from "../../asserts/loadingImg/load2.png";
import Img3 from "../../asserts/loadingImg/load3.png";
import Img4 from "../../asserts/loadingImg/load4.png";
import Img5 from "../../asserts/loadingImg/load5.png";
import Img6 from "../../asserts/loadingImg/load6.png";
import Img7 from "../../asserts/loadingImg/load7.png";
import Img8 from "../../asserts/loadingImg/load8.png";
import Img9 from "../../asserts/loadingImg/load9.png";
import Img10 from "../../asserts/loadingImg/load10.png";
import Img11 from "../../asserts/loadingImg/load11.png";
import Img12 from "../../asserts/loadingImg/load12.png";
import Img13 from "../../asserts/loadingImg/load13.png";
import Img14 from "../../asserts/loadingImg/load14.png";
import Img15 from "../../asserts/loadingImg/load15.png";
import Img16 from "../../asserts/loadingImg/load16.png";
import Img17 from "../../asserts/loadingImg/load17.png";
import Img18 from "../../asserts/loadingImg/load18.png";
import Img19 from "../../asserts/loadingImg/load19.png";
import Img20 from "../../asserts/loadingImg/load20.png";
import Img21 from "../../asserts/loadingImg/load21.png";
import Img22 from "../../asserts/loadingImg/load22.png";
import Img23 from "../../asserts/loadingImg/load23.png";
import Img24 from "../../asserts/loadingImg/load24.png";
import Img25 from "../../asserts/loadingImg/load25.png";
import Img26 from "../../asserts/loadingImg/load26.png";
import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
  var imgs = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
    Img12,
    Img13,
    Img14,
    Img15,
    Img16,
    Img17,
    Img18,
    Img19,
    Img20,
    Img21,
    Img22,
    Img23,
    Img24,
    Img25,
    Img26,
  ];
  const [image1, setImage1] = useState(Img1);
  const [image2, setImage2] = useState(Img2);
  const [image3, setImage3] = useState(Img3);
  const [image4, setImage4] = useState(Img4);

  const [image5, setImage5] = useState(Img5);
  const [image6, setImage6] = useState(Img6);
  const [image7, setImage7] = useState(Img7);
  const [image8, setImage8] = useState(Img8);

  useEffect(() => {
    const starting = () => {
      setInterval(() => {
        var a = [];
        for (var i = 0; i < 8; i++) {
          var t = Math.floor(Math.random() * 25);
          while (a.includes(t)) {
            t = Math.floor(Math.random() * 25);
          }
          a[i] = t;
        }
        setImage1(imgs[a[0]]);
        setImage2(imgs[a[3]]);
        setImage3(imgs[a[2]]);
        setImage4(imgs[a[7]]);

        setImage5(imgs[a[4]]);
        setImage6(imgs[a[1]]);
        setImage7(imgs[a[6]]);
        setImage8(imgs[a[5]]);
      }, 2000);
    };
    starting();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (window.innerWidth < 600) {
    return (
      <Container className="Landing">
        <div
          style={{ width: "100%", textAlign: "center" }}
          className="LandingText"
        >
          <Spinner className="LoadingSpinner" animation="border" />
          <span style={{ fontSize: "50px" }} className="Ltext">
            {" "}
            Loading...
          </span>
        </div>
        <Row>
          <Col>
            <img src={image1} alt="image1" />
          </Col>
          <Col>
            <img src={image2} alt="image2" />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={image3} alt="image3" />
          </Col>
          <Col>
            <img src={image4} alt="image4" />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={image5} alt="image5" />
          </Col>

          <Col>
            <img src={image6} alt="image6" />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={image7} alt="image7" />
          </Col>
          <Col>
            <img src={image8} alt="image8" />
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container className="Landing">
        <div className="LandingText">
          <Spinner className="LoadingSpinner" animation="border" />
          <span className="Ltext"> Loading...</span>
        </div>
        <Row>
          <Col>
            <img src={image1} alt="image1" />
          </Col>
          <Col>
            <img src={image2} alt="image2" />
          </Col>

          <Col>
            <img src={image3} alt="image3" />
          </Col>
          <Col>
            <img src={image4} alt="image4" />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={image5} alt="image5" />
          </Col>

          <Col>
            <img src={image6} alt="image6" />
          </Col>

          <Col>
            <img src={image7} alt="image7" />
          </Col>
          <Col>
            <img src={image8} alt="image8" />
          </Col>
        </Row>
      </Container>
    );
  }
}
