import React, { useEffect, useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Layout from "../layouts/general";
import axios from "axios";
import Context from "../context/";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Circus = () => {
  const { circusSelected } = useContext(Context);
  const { cart, setCart } = useContext(Context);
  const [eventData, setEventData] = useState();

  //FETCH EVENTS FROM SELECTED CIRCUS
  useEffect(() => {
    // Make a request for a user with a given ID
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
      .then(function() {
        // always executed
        console.log(eventData);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (eventData) {
    return (
      <Layout>
        <Container fluid>
          <Table striped bordered hover responsive variant="light">
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
              {eventData.map(data => (
                <tr key={data.idevent}>
                  <td>{data.date}</td>
                  <td>{data.city}</td>
                  <td>{data.slots}</td>
                  <td>{data.price}</td>
                  <td>
                    <Form.Control
                      type="number"
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
                  <td>O X I</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Link to="/cart">panier</Link>
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
