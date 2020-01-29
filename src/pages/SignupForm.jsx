import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const SignupForm = props => {
  // methods
  const handleSubmit = () => {
    props.history.push("/login");
  };

  return (
    <Container>
      <h2>Vos informations</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Nom</Form.Label>
            <Form.Control placeholder="Votre nom..." />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>Prénom</Form.Label>
            <Form.Control placeholder="Votre prénom..." />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Un email valide..." />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword1">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="choisissez un mot de passe sécurisé"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword2">
            <Form.Label>Confirmer votre mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="il doit être identique"
            />
          </Form.Group>
        </Form.Row>

        <Link to="/signup">
          <Button variant="primary">Retour</Button>
        </Link>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default SignupForm;
