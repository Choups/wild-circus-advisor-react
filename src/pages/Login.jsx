import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = props => {
  const [login, setLogin] = useState({
    email: "test@test.com",
    password: 12345
  });

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post("/api/user/signin", {
        email: login.email,
        password: login.password
      })
      .then(res => res.data)
      .then(data => localStorage.setItem("token", data))
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        props.history.push("/dashboard");
      });
  };

  return (
    <Container className="fluid d-flex flex-column justify-content-around fullHeight">
      <Row className="d-flex justify-content-center">
        <Form onSubmit={handleSubmit} className="text-white">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Entrez votre email"
              onChange={e => setLogin({ ...login, email: e.target.value })}
            />
            <Form.Text className="text-grey">
              Vos données restent strictement confidentielles.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Entrez votre mot de passe"
              onChange={e => setLogin({ ...login, password: e.target.value })}
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
