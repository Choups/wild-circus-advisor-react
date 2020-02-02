import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const SignupForm = props => {
  const formLevel =
    (props.match.params.level === "standard" && 1) ||
    (props.match.params.level === "pro" && 2);
  const [info, setInfo] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    level: formLevel
  });

  const updateForm = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    fetch("/api/user/new", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(info)
    }).then(res => res.json());
    setTimeout(() => {
      props.history.push("/login");
    }, 1000);
  };

  return (
    <Container className="fluid d-flex flex-column justify-content-around fullHeight" style={{ maxWidth: "500px" }}>
      <Row className="d-flex justify-content-center">
        <h2>Vos informations</h2>
      </Row>
      <Form
        onSubmit={submitForm}
        className="fluid d-flex flex-column justify-content-center text-white "
      >
        <Form.Row>

          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>Prénom</Form.Label>
            <Form.Control
              name="firstname"
              onChange={updateForm}
              placeholder="Votre prénom..."
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              name="lastname"
              onChange={updateForm}
              placeholder="Votre nom..."
            />
          </Form.Group>


        </Form.Row>

        <Form.Group controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            onChange={updateForm}
            type="email"
            placeholder="Un email valide..."
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword1">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              name="password"
              onChange={updateForm}
              type="password"
              placeholder="choisissez un mot de passe"
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
        <Form.Row >
          <Link to="/signup">
            <Button style={{ marginLeft: "5px" }} variant="outline-warning">Retour</Button>
          </Link>
          <Button style={{ marginLeft: "auto", marginRight: "5px" }} variant="success" type="submit">
            Envoyer
          </Button>
        </Form.Row>
      </Form>
    </Container>
  );
};

export default SignupForm;
