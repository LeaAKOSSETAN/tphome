import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import image from "./image.jpg";
import logo from "./logo.png";

const Navbar2: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url(${image})`,
        position: "relative",
        height: "100vh",
        color: "white",
        textAlign: "center",
      }}
    >
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" style={{ height: "40px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about-us">About Us</Nav.Link>
              <Nav.Link href="#living-room">Living Room</Nav.Link>
              <Nav.Link href="#kitchen">Kitchen</Nav.Link>
              <Nav.Link href="#outdoors">Outdoors</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.5)", // Overlay effect
        }}
      >
        <h1 className="display-4 fw-bold">
          Coming Home Never Felt So Good!
        </h1>
        <p className="mt-3 fs-5 fst-italic">
          Quam a diamlorem explicabo quos fugit, ut aliquam modi.
        </p>
        <Button variant="danger" className="mt-4 px-4 py-2">
          FIND YOUR STYLE
        </Button>
      </div>
    </div>
  );
};

export default Navbar2;
