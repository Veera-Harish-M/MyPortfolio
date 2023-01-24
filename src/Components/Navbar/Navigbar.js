import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navigbar.css";

export default function Navigbar() {
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
