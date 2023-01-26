import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer" id="ContactSpot">
        <div
          style={{
            position: "absolute",
            width: "100%",
            textAlign: "center",
            color: "rgba(161, 161, 161, 0.5)",
            zIndex: 1,
          }}
        >
          <b className="textTrans">
            Let's have a <b className="coffee">coffee</b>?
          </b>
        </div>

        <div className="social">
          <a
            href="https://twitter.com/veeraharishm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i id="twitter" className="icon-twitter"></i>
          </a>
          <a
            href="https://github.com/Veera-Harish-M"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i id="github" className="icon-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/veera-harish-muthazhagu-60441016a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i id="linkedin" className="icon-linkedin-sign"></i>
          </a>
          <a
            href="https://www.facebook.com/veeraharish.muthazgu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i id="facebook" className="icon-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/veeraharishmuthalagu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i id="instagram" className="icon-instagram"></i>
          </a>
          <a
            href="mailto:veeraharishmuthazhagu@gmail.com?subject=Hi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i id="mail" className="icon-envelope"></i>
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://drive.google.com/file/d/1FZIGplihOZAigRTxT6KLFJoL-vTOCtnM/view?usp=share_link"
              );
              window.open(
                "https://drive.google.com/file/d/154Kjutw13QONUh8TeKjWxpwbSg5MvYn2/view?usp=share_link"
              );
            }}
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i id="file" className="icon-file-text"></i>
          </a>
        </div>
      </div>
    );
  }
}
