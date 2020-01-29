import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Container>
      <h1>Wild Circus Booking</h1>
      <p>
        Bienvenue sur la plateforme de réservation en ligne specialisèe dans les
        cirques.
      </p>
      <Link to="/signup">
        <Button>S'inscrire</Button>
      </Link>
      <Link to="/login">
        <Button>Se connecter</Button>
      </Link>
    </Container>
  );
};

export default LandingPage;
