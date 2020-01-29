import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Container>
      <h2>Êtes-vous un futur client ou un professionnel du cirque ?</h2>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Futur client</Card.Title>
              <Card.Text>
                Je souhaite consulter la liste des spectacles et acheter des
                tickets.
              </Card.Text>
              <Link to="/form?compte=standard">
                <Button variant="primary">Compte standard</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Professionnel du cirque</Card.Title>
              <Card.Text>
                Je souhaite référencer mon cirque afin de gérer mes prochains
                spectacles.
              </Card.Text>
              <Link to="/form?compte=pro">
                <Button variant="primary">Compte pro</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
