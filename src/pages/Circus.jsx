import React, { useEffect, useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Layout from "../layouts/general";
import axios from "axios";
import Context from "../context/";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link } from "react-router-dom";

const Circus = () => {
  const { circusSelected, circusList } = useContext(Context);
  const { cart, setCart } = useContext(Context);
  const [eventData, setEventData] = useState();

  //FETCH EVENTS FROM SELECTED CIRCUS
  useEffect(() => {
    // Make a request for a user with a given ID
    if (circusSelected) {
      axios
        .get(`/api/event/${circusSelected}`)
        .then(function(response) {
          // handle success
          setEventData(response.data);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .finally(
          // always executed
          console.log(eventData)
        );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [circusSelected]);

  if (eventData) {
    return (
      <Layout>
        <Container fluid>
          <Jumbotron
            style={{
              backgroundImage: `url(${
                circusList.filter(el => el.idcircus === circusSelected)[0].image
              })`,
              padding: "0",
              backgroundPosition: "center",
              backgroundSize: "cover",
              opacity: "0.9"
            }}
          >
            <Jumbotron
              style={{
                backgroundColor: `rgba(0,0,0,0.7)`
              }}
            >
              <h2>
                {
                  circusList.filter(el => el.idcircus === circusSelected)[0]
                    .name
                }
              </h2>
              <p>
                {
                  circusList.filter(el => el.idcircus === circusSelected)[0]
                    .content
                }
              </p>
              <p>
                <Link to="/reviews">
                  <Button variant="outline-info">Lire les avis</Button>
                </Link>
              </p>
            </Jumbotron>
          </Jumbotron>
          <Table hover responsive>
            <thead>
              <tr>
                <th>Date</th>
                <th>Ville</th>
                <th>Places restantes</th>
                <th>Tarif</th>
                <th>Quantité</th>
              </tr>
            </thead>
            <tbody>
              {eventData.map(data => (
                <tr key={data.idevent}>
                  <td>{data.date.substring(0, 10)}</td>
                  <td>{data.city}</td>
                  <td>{data.slots}</td>
                  <td>{Number.parseFloat(data.price).toFixed(2)} €</td>
                  <td>
                    <Form.Control
                      style={{ width: "100px", margin: "auto" }}
                      type="number"
                      min="0"
                      id={data.idevent}
                      placeholder="0"
                      onChange={e =>
                        setCart({
                          ...cart,
                          [e.target.id]: {
                            quantity: e.target.value,
                            date: data.date,
                            city: data.city,
                            slots: data.slots,
                            price: data.price,
                            idevent: data.idevent,
                            circus: data.name,
                            image: data.image
                          }
                        })
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Link to="/cart">
            <Button variant="primary">Voir mon panier</Button>
          </Link>
        </Container>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div></div>
      </Layout>
    );
  }
};

export default Circus;
