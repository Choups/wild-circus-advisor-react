import React, { useContext, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/circus.svg";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Context from "../context/";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const NavbarComp = () => {
  const {
    who,
    setWho,
    cart,
    connectedUser,
    animation,
    newHist,
    setNewHist
  } = useContext(Context);

  //FETCH REVIEWS FROM SELECTED CIRCUS
  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get(`/api/user/${connectedUser}`)
      .then(function(response) {
        // handle success
        setWho(response.data[0]);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectedUser]);

  if (connectedUser && who) {
    return (
      <Navbar
        fixed="top"
        expand="lg"
        style={{ backgroundColor: "black" }}
        variant="dark"
        className={animation ? "scrollhide nav-anim navshad" : "navshad"}
      >
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ width: "25%" }}
          className="titre"
        >
          <img
            alt=""
            src={logo}
            width="35"
            height="35"
            className="d-inline-block align-top padlog"
          />{" "}
          <span className="d-inline-block align-bottom navtitre">
            {" "}
            Wild Circus Advisor
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/dashboard" className="hovernav">
              Réserver un spectacle
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/history"
              className="hovernav"
              onClick={() => setNewHist(false)}
            >
              Historique et avis
              {newHist && (
                <Badge
                  className="badge badge-pill badge-info"
                  style={{ transform: "translateY(-5px)" }}
                >
                  New
                </Badge>
              )}
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="hovernav">
              Panier{" "}
              {Object.keys(cart).length > 0 && (
                <Badge
                  className="badge badge-pill badge-danger"
                  style={{ transform: "translateY(-5px)" }}
                >
                  {Object.keys(cart).length}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
          <AiOutlineInstagram className="social" />
          <AiOutlineGithub className="social" />
          <AiOutlineFacebook className="social" />
          <Dropdown>
            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
              Bonjour {who.firstname}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href=" /">Déconnexion</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Navbar>
    );
  } else {
    return <div></div>;
  }
};

export default NavbarComp;
