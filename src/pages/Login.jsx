import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Login = props => {
  // methods
  const handleSubmit = () => {
    props.history.push("/login");
  };

  return (
    <Container className="fluid d-flex flex-column justify-content-around fullHeight">
      <Row className="d-flex justify-content-center">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Entrez votre email" />
            <Form.Text className="text-muted">
              Vos données restent strictement confidentielles.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Entrez votre mot de passe"
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Conserver ma session" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Se connecter
          </Button>
          <Link to="/signup">
            <p>Pas de compte ? C'est par ici</p>
          </Link>
        </Form>
      </Row>
    </Container>
  );
};

export default Login;
