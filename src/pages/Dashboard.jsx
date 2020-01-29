import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const fakedata = ["", "", "", "", "", "", "", "", "", "", "", "", "", ""];

const Dashboard = () => {
  return (
    <Container style={{ display: "flex", flexWrap: "wrap" }}>
      {fakedata.map((a, index) => (
        <Card style={{ width: "18rem", margin: "20px auto" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Cirque 1</Card.Title>
            <Card.Text>Texte d'accroche du cirque 1.</Card.Text>
            <Link to="/form?compte=standard">
              <Button variant="primary">Réserver</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Dashboard;
