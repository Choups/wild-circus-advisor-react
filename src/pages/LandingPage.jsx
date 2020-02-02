import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import YoutubeBackground from "react-youtube-background";

const LandingPage = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center fullHeight"
    >
      <Row className="d-flex justify-content-center">
        <h1>Wild Circus Advisor</h1>
      </Row>
      <Row
        className="d-flex justify-content-center text-white"
        style={{ marginTop: "40px" }}
      >
        <p>
          Bienvenue sur la plateforme de réservation en ligne specialisèe dans
          les cirques.
        </p>
      </Row>
      <Row className="d-flex justify-content-center text-white">
        <Link to="/signup">
          <Button
            variant="secondary"
            style={{ marginRight: "5px", marginTop: "40px" }}
          >
            S'inscrire
          </Button>
        </Link>
        <Link to="/login">
          <Button style={{ marginLeft: "5px", marginTop: "40px" }}>
            Se connecter
          </Button>
        </Link>
      </Row>
    </Container>
  );
};

export default LandingPage;
