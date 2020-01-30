import React, { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Layout from "../layouts/general";
import Context from "../context";
import Form from "react-bootstrap/Form";
import axios from "axios";

const History = () => {
  const { connectedUser, history, setHistory } = useContext(Context);

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
  }, [history]);

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
                <Button onClick={() => alert("plop")}>Ajouter</Button>
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
                  <td>{product.review}</td>
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
