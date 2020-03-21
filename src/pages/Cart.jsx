import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Layout from "../layouts/general";
import Context from "../context/";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, setCart, connectedUser, setNewHist } = useContext(Context);

  if (Object.keys(cart).length > 0) {
    const arrayOfProducts = Object.keys(cart).map(key => cart[key]);
    const subTotal = arrayOfProducts
      .map(item => item.price * item.quantity)
      .reduce((a, b) => a + b);

    const buy = () => {
      arrayOfProducts.forEach(product =>
        axios
          .post(`${process.env.REACT_APP_API_URL}/api/history/new`, {
            event_idevent: product.idevent,
            quantity: product.quantity,
            user_iduser: connectedUser
          })
          .then(res => res.data)
          .catch(function(error) {
            console.log(error);
          })
          .finally(function() {
            setCart([]);
            setNewHist(true);
          })
      );
    };

    return (
      <Layout>
        <Container fluid>
          <Table hover responsive>
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
                  <td>{product.date.substring(0, 10)}</td>
                  <td>{product.city}</td>
                  <td>{Number.parseFloat(product.price).toFixed(2)} €</td>

                  <td>
                    <Form.Control
                      type="number"
                      style={{ width: "100px", margin: "auto" }}
                      min="0"
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
                  <td>
                    {Number.parseFloat(
                      product.quantity * product.price
                    ).toFixed(2)}{" "}
                    €
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Card
            style={{
              maxWidth: "250px",
              backgroundColor: "rgba(255,255,255,0.1)",
              border: "none",
              marginLeft: "auto"
            }}
          >
            <Card.Header
              className="d-flex justify-content-center align-items-center text-white"
              style={{ border: "none" }}
            >
              <p>Récapitulatif</p>
            </Card.Header>
            <Card.Body className="transcard" style={{ textAlign: "center" }}>
              <p>
                total: <span className="dotfacture">..................</span>{" "}
                {Number.parseFloat(subTotal).toFixed(2)} €
              </p>
              <p>
                taxes: <span className="dotfacture">..................</span>{" "}
                {Number.parseFloat((subTotal * 5) / 100).toFixed(2)} €
              </p>
              <p>
                total à payer: <span className="dotfacture">......</span>
                {Number.parseFloat(subTotal + (subTotal * 5) / 100).toFixed(
                  2
                )}{" "}
                €
              </p>
              <Link to="/dashboard">
                <Button
                  variant="outline-warning"
                  style={{ marginBottom: "10px" }}
                >
                  Retour
                </Button>
              </Link>
              <Button onClick={() => buy()}>Valider le paiement</Button>
            </Card.Body>
          </Card>
        </Container>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <Container fluid>
          <Table hover responsive>
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
              <tr>
                <td colSpan="7">Votre panier est vide.</td>
              </tr>
            </tbody>
          </Table>

          <Link to="/dashboard">
            <Button variant="outline-warning" style={{ marginBottom: "10px" }}>
              Retour
            </Button>
          </Link>
        </Container>
      </Layout>
    );
  }
};

export default Cart;
