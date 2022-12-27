import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        <div
          style={{
            position: "absolute",
            width: "100%",
            textAlign: "center",
            color: "rgba(161, 161, 161, 0.5)",
            zIndex: 1,
          }}
        >
          <b className="textTrans" style={{ fontSize: "95px" }}>
            Let's have a <b className="coffee">coffee</b>?
          </b>
        </div>

        <div class="social">
          <a
            href="https://twitter.com/veeraharishm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i id="twitter" class="icon-twitter"></i>
          </a>
          <a
            href="https://github.com/Veera-Harish-M"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i id="github" class="icon-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/veera-harish-muthazhagu-60441016a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i id="linkedin" class="icon-linkedin-sign"></i>
          </a>
          <a
            href="https://www.facebook.com/veeraharish.muthazgu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i id="facebook" class="icon-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/veeraharishmuthalagu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i id="instagram" class="icon-instagram"></i>
          </a>
          <a
            href="mailto:veeraharishmuthazhagu@gmail.com?subject=Hi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i id="mail" class="icon-envelope"></i>
          </a>
        </div>
      </div>
    );
  }
}
