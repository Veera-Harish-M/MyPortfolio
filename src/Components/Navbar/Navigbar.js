import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navigbar.css";

export default function Navigbar() {
  const [scrolled, setScrolled] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 56) {
      setScrolled(true);
    } else if (window.scrollY < 56) {
      setScrolled(false);
    }
  });
  return (
    <div>
      <Navbar
        className="navbarCust"
        expand="lg"
        fixed="top"
        collapseOnSelect
        variant="dark"
        style={
          scrolled
            ? { backgroundColor: "#000000c2" }
            : { backgroundColor: "transparent" }
        }
      >
        <Container>
          <Navbar.Brand
            onClick={() => document.getElementById("HomeSpot").scrollIntoView()}
          >
            {"{"} Veera {"}"}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <div
                className="navText"
                onClick={() =>
                  document.getElementById("ProjectSpot").scrollIntoView()
                }
              >
                . myWorks ( )
              </div>
              <div
                className="navText"
                onClick={() =>
                  document.getElementById("ExperienceSpot").scrollIntoView()
                }
              >
                . TimeLine ( )
              </div>
            </Nav>
            <Nav>
              <div
                className="navText"
                onClick={() =>
                  document.getElementById("AboutSpot").scrollIntoView()
                }
              >
                . about ( )
              </div>
              <div
                className="navText"
                onClick={() =>
                  document.getElementById("ContactSpot").scrollIntoView()
                }
              >
                . contact ( )
              </div>
              <Nav.Link
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
                . Resume ( )
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
