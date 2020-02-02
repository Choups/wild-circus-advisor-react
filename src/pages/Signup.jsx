import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import std from "../assets/Laughing-Family.jpg";
import pro from "../assets/pro.jpg";

const Signup = () => {
  return (
    <Container className="fluid d-flex flex-column justify-content-around fullHeight">
      <Row className="d-flex justify-content-center text-white">
        <h2>Êtes-vous un futur client ou un professionnel du cirque ?</h2>
      </Row>
      <Row className="d-flex justify-content-center">
        <CardDeck>
          <Card
            style={{
              width: "22rem",
              backgroundColor: "rgba(0,0,0,0.4)",
              marginRight: "5vw"
            }}
            className="text-white"
          >
            <Card.Img
              variant="top"
              src={std} /* style={{ height: "200px" }} */
            />
            <Card.Body>
              <Card.Title>Futur client</Card.Title>
              <Card.Text>
                Je souhaite consulter la liste des spectacles et réserver ma/mes
                place(s).
              </Card.Text>
              <Link to="/form/standard">
                <Button variant="primary">Compte standard</Button>
              </Link>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "22rem",
              backgroundColor: "rgba(0,0,0,0.4)",
              marginLeft: "5vw"
            }}
            className="text-white"
          >
            <Card.Img
              variant="top"
              src={pro} /* style={{ height: "200px" }} */
            />
            <Card.Body>
              <Card.Title>Professionnel du cirque</Card.Title>
              <Card.Text>
                Je souhaite référencer mon cirque afin de gérer mes prochains
                spectacles.
              </Card.Text>
              <Link to="/form/pro">
                <Button variant="primary">Compte pro</Button>
              </Link>
            </Card.Body>
          </Card>
        </CardDeck>
      </Row>
      <Link to="/">
        <Button
          style={{ position: "absolute", bottom: "10px", left: "10px" }}
          variant="outline-warning"
        >
          Retour
        </Button>
      </Link>
    </Container>
  );
};

export default Signup;
