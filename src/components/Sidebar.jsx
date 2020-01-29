import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Sidebar = () => {
  return (
    <Container>
      {/* section filtes */}
      <Form>
        <Form.Group controlId="filterByCity">
          <Form.Label>Ville</Form.Label>
          <Form.Control placeholder="Filtrer par ville" />
        </Form.Group>

        <Form.Group controlId="filtreyByDate">
          <Form.Label>Date</Form.Label>
          <Form.Control placeholder="Filtrer par date" />
        </Form.Group>

        <Form.Group controlId="filtreyByName">
          <Form.Label>mot clé</Form.Label>
          <Form.Control placeholder="Filtrer par mot clé" />
        </Form.Group>

        <Form.Group controlId="filtreyByPrice">
          <Form.Label>Prix</Form.Label>
          <Form.Control placeholder="Filtrer par prix" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Filtrer
        </Button>
        <Button variant="primary">Réinitialiser</Button>
      </Form>
    </Container>
  );
};

export default Sidebar;
