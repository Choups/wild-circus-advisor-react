import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Layout from "../layouts/general";

const fakedata = ["", "", ""];

const Cart = () => {
  return (
    <Layout child="cart">
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Ville</th>
              <th>Tarif</th>
              <th>Quantité</th>
              <th>Sous-total</th>
            </tr>
          </thead>
          <tbody>
            {fakedata.map((a, index) => (
              <tr key={index}>
                <td>20/09/2020</td>
                <td>Paris</td>
                <td>45,00 €</td>
                <td>- 3 + OK </td>
                <td>135,00 €</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Total</th>
              <th>Taxes</th>
              <th>Total à payer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>405,00 €</td>
              <td>40,00 €</td>
              <td>445,00 €</td>
            </tr>
          </tbody>
        </Table>
        <Button>Valider le paiement</Button>
      </Container>
    </Layout>
  );
};

export default Cart;
