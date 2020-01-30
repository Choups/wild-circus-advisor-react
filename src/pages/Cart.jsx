import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Layout from "../layouts/general";
import Context from "../context/";
import Form from "react-bootstrap/Form";

const Cart = () => {
  const { cart, setCart } = useContext(Context);
  if (cart) {
    const arrayOfProducts = Object.keys(cart).map(key => cart[key]);
    const subTotal = arrayOfProducts
      .map(item => item.price * item.quantity)
      .reduce((a, b) => a + b);

    return (
      <Layout child="cart">
        <Container>
          <Table striped bordered hover>
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
              {arrayOfProducts.map(product => (
                <tr key={product.event}>
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
          <Button>Valider le paiement</Button>
        </Container>
      </Layout>
    );
  } else {
    return <Layout child="cart"></Layout>;
  }
};

export default Cart;
