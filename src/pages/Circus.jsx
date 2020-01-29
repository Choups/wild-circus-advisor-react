import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

const fakedata = ["", "", "", "", "", "", "", "", "", "", "", "", "", ""];

const Circus = () => {
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Ville</th>
            <th>Places restantes</th>
            <th>Tarif</th>
            <th>Quantité</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fakedata.map((a, index) => (
            <tr>
              <td>20/09/2020</td>
              <td>Paris</td>
              <td>250</td>
              <td>45,00 €</td>
              <td>- O + OK </td>
              <td>O X I</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Circus;
