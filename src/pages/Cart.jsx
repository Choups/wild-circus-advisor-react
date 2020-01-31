import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Layout from "../layouts/general";
import Context from "../context/";
import Form from "react-bootstrap/Form";
import axios from "axios";

const Cart = () => {
  const { cart, setCart, connectedUser } = useContext(Context);

  if (Object.keys(cart).length > 0) {
    const arrayOfProducts = Object.keys(cart).map(key => cart[key]);
    const subTotal = arrayOfProducts
      .map(item => item.price * item.quantity)
      .reduce((a, b) => a + b);

    const buy = () => {
      arrayOfProducts.forEach(product =>
        axios
          .post("/api/history/new", {
            event_idevent: product.idevent,
            quantity: product.quantity,
            user_iduser: connectedUser
          })
          .then(res => res.data)
          .catch(function(error) {
            console.log(error);
          })
          .finally(setCart([]))
      );
    };

    return (
      <Layout>
        <Container fluid>
          <Table striped bordered hover responsive variant="light">
            <thead>
              <tr>
                <th>Cirque</th>
                <th>Nom</th>
                <th>Date</th>
                <th>Ville</th>
                <th>Tarif</th>
                <th>Quantité</th>
                <th>Sous-total</th>
              </tr>
            </thead>
            <tbody>
              {arrayOfProducts.map((product, index) => (
                <tr key={index}>
                  <td>
                    <img
                      style={{ height: "50px" }}
                      src={product.image}
                      alt={product.circus}
                    ></img>
                  </td>
                  <td>{product.circus}</td>
                  <td>{product.date}</td>
                  <td>{product.city}</td>
                  <td>{product.price} €</td>
                  <td>- {product.quantity} + OK </td>
                  <td>
                    <Form.Control
                      type="number"
                      id={product.idevent}
                      value={product.quantity}
                      placeholder="0"
                      onChange={e =>
                        setCart({
                          ...cart,
                          [e.target.id]: {
                            quantity: e.target.value,
                            date: product.date,
                            city: product.city,
                            slots: product.slots,
                            price: product.price,
                            idevent: product.idevent,
                            circus: product.circus,
                            image: product.image
                          }
                        })
                      }
                    />
                  </td>
                  <td>{product.quantity * product.price} €</td>
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
                <td>{subTotal} €</td>
                <td>{(subTotal * 5) / 100} €</td>
                <td>{subTotal + (subTotal * 5) / 100} €</td>
              </tr>
            </tbody>
          </Table>
          <Button onClick={() => buy()}>Valider le paiement</Button>
        </Container>
      </Layout>
    );
  } else {
    return <Layout></Layout>;
  }
};

export default Cart;
