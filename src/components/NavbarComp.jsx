import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <Navbar
      fixed="top"
      bg="light"
      expand="lg"
      style={{ marginBottom: "200px" }}
    >
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Wild Circus
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/dashboard">
            Réserver un spectacle
          </Nav.Link>
          <Nav.Link as={Link} to="/history">
            Mon historique
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            Panier
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Rechercher"
            className="mr-sm-2"
          />
        </Form>
        <Nav>
          <Nav.Link href="#link">Déconnexion</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;
