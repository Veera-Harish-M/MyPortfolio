import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navigbar.css"

export default function Navigbar() {
  return (
    <div >
      <Navbar className="navbarCust" expand="lg" fixed="top"  collapseOnSelect  variant="dark">
      <Container>
        <Navbar.Brand href="#home">{'{'} Veera {'}'}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">. projects ( )</Nav.Link>
            <Nav.Link href="#pricing">. experience ( )</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">. about ( )</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            . contact ( )
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
