import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Layout from "../layouts/general";
import Context from "../context";
import Form from "react-bootstrap/Form";
import axios from "axios";

const History = () => {
  const { connectedUser, history, setHistory } = useContext(Context);
  const [newReview, setNewReview] = useState();
  const [reload, setReload] = useState(0);

  //FETCH ALL CIRCUS
  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get(`/api/history/${connectedUser}`)
      .then(function(response) {
        // handle success
        setHistory(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.id);

    axios
      .put(`/api/history/${connectedUser}/${e.target.id}`, {
        review: newReview
      })
      .then(res => res.data)
      .catch(function(error) {
        console.log(error);
      })
      .finally(setReload(reload + 1));
  };

  if (history) {
    return (
      <Layout child="history">
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Cirque</th>
                <th>Nom</th>
                <th>Date</th>
                <th>Ville</th>
                <th>Quantité</th>
                <th>Votre avis</th>
              </tr>
            </thead>
            <tbody>
              {history.map(product => (
                <tr key={product.event_idevent}>
                  <td>
                    <img
                      style={{ height: "50px" }}
                      src={product.image}
                      alt={product.name}
                    ></img>
                  </td>
                  <td>{product.name}</td>
                  <td>{product.date}</td>
                  <td>{product.city}</td>
                  <td>{product.quantity}</td>
                  <td>
                    {product.review ? (
                      product.review
                    ) : (
                      <Form id={product.event_idevent} onSubmit={handleSubmit}>
                        <Form.Control
                          placeholder="Ajouter un avis"
                          onChange={e => setNewReview(e.target.value)}
                        />
                        <Button type="submit">Ajouter</Button>
                      </Form>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </Layout>
    );
  } else {
    return <Layout child="cart"></Layout>;
  }
};

export default History;
