import React, { useContext, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Context from "../context/";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";

const NavbarComp = () => {
  const { who, setWho, cart, connectedUser } = useContext(Context);

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
      <Navbar fixed="top" bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/" style={{ width: "23.5%" }}>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Wild Circus Advisor
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
          <Form inline>
            <FormControl
              type="text"
              placeholder="Rechercher"
              className="mr-sm-2"
            />
          </Form>
          <Dropdown>
            <Dropdown.Toggle variant="outline-info" id="dropdown-basic">
              Bonjour {who.firstname}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/">Déconnexion</Dropdown.Item>
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
