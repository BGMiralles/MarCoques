import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./StaticNavbar.css";
import logo from "../../img/logo_coques.png";

export const StaticNavbar = () => {

  return (
    <Navbar expand="lg" className="bg-dark navbarStatic fixed-top">
      <Container className="container-navbar">
        <Navbar.Brand>
          <img className="headerLogo" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar-links">
            <Nav.Link className="text-navbar items-navbar" href="/">
              HOME
            </Nav.Link>
            <Nav.Link className="text-navbar items-navbar" href="/gallery">
              CARTA
            </Nav.Link>
            <Nav.Link className="text-navbar items-navbar" href="/artists">
              CONOCENOS
            </Nav.Link>
            <Nav.Link className="text-navbar items-navbar" href="/about">
              CONTACTO
            </Nav.Link>
            <Nav.Link className="text-navbar items-navbar" href="/ours">
              NUESTROS PRODUCTORES
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};