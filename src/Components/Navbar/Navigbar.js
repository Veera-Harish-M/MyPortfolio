import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navigbar.css";

export default function Navigbar() {
  const ProjectSpot = document.getElementById("ProjectSpot");
  const ExperienceSpot = document.getElementById("ExperienceSpot");
  const AboutSpot = document.getElementById("AboutSpot");
  const ContactSpot = document.getElementById("ContactSpot");
  const HomeSpot = document.getElementById("HomeSpot");

  return (
    <div>
      <Navbar
        className="navbarCust"
        expand="lg"
        fixed="top"
        collapseOnSelect
        variant="dark"
      >
        <Container>
          <Navbar.Brand
            onClick={() =>
              HomeSpot.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              })
            }
          >
            {"{"} Veera {"}"}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <div
                className="navText"
                onClick={() =>
                  ProjectSpot.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  })
                }
              >
                . myWorks ( )
              </div>
              <div
                className="navText"
                onClick={() =>
                  ExperienceSpot.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  })
                }
              >
                . TimeLine ( )
              </div>
            </Nav>
            <Nav>
              <div
                className="navText"
                onClick={() =>
                  AboutSpot.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  })
                }
              >
                . about ( )
              </div>
              <div
                className="navText"
                onClick={() =>
                  ContactSpot.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  })
                }
              >
                . contact ( )
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
