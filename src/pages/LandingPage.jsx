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
      {/* <YoutubeBackground videoId={"x-1-gLv3aWs"} overlay={"rgba(0,0,0,0.5)"}> */}
      <Row className="d-flex justify-content-center">
        <h1>Wild Circus Booking</h1>
      </Row>
      <Row className="d-flex justify-content-center">
        <p>
          Bienvenue sur la plateforme de réservation en ligne specialisèe dans
          les cirques.
        </p>
      </Row>
      <Row className="d-flex justify-content-center">
        <Link to="/signup">
          <Button>S'inscrire</Button>
        </Link>
        <Link to="/login">
          <Button>Se connecter</Button>
        </Link>
      </Row>
      {/* </YoutubeBackground> */}
    </Container>
  );
};

export default LandingPage;
