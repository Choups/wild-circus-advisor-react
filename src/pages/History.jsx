import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Layout from "../layouts/general";
import Context from "../context";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image"

import axios from "axios";

const History = () => {
  const { connectedUser, history, reload, setReload, setHistory } = useContext(
    Context
  );
  const [newReview, setNewReview] = useState();

  const [newNote, setNewNote] = useState("Génial");

  //FETCH ALL CIRCUS
  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get(`/api/history/${connectedUser}`)
      .then(function (response) {
        // handle success
        setHistory(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectedUser, reload]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.id);

    axios
      .put(`/api/history/${connectedUser}/${e.target.id}`, {
        review: newReview,
        note: newNote
      })
      .then(res => res.data)
      .catch(function (error) {
        console.log(error);
      })
      .finally(setReload(reload + 1));
  };

  if (history) {
    return (
      <Layout>
        <Container fluid>
          <Table


            hover
            responsive >
            <thead>
              <tr >
                <th style={{ width: "20%" }}>Cirque</th>
                <th>Nom</th>
                <th>Date</th>
                <th>Ville</th>
                <th>Quantité</th>
                <th colSpan="2">Votre avis</th>

              </tr>
            </thead>
            <tbody>
              {history.map(product => (
                <tr key={product.event_idevent}>
                  <td>
                    <Image
                      fluid
                      thumbnail
                      src={product.image}
                      alt={product.name}
                    ></Image>
                  </td>
                  <td>{product.name}</td>
                  <td>{product.date.substring(0, 10)}</td>
                  <td>{product.city}</td>
                  <td>{product.quantity}</td>
                  <td colSpan="2">
                    {product.review ? (
                      <blockquote className="blockquote ">
                        <p>
                          {product.review}<br />
                        </p>
                        <footer className="blockquote-footer">
                          <cite>
                            {product.note}
                          </cite>
                        </footer></blockquote>
                    ) : (
                        <Form
                          noValidate
                          id={product.event_idevent}
                          onSubmit={handleSubmit}


                        >
                          <Form.Control
                            as="textarea"
                            required
                            placeholder="Ajouter un avis"
                            onChange={e => setNewReview(e.target.value)}
                          />
                          <br />
                          <Form.Label>Note</Form.Label>{" "}
                          <Form.Control
                            required
                            as="select"
                            onChange={e => setNewNote(e.target.value)}
                            style={{ display: "inline-block", width: "auto" }}
                          >
                            <option>Génial</option>
                            <option>Sympa</option>
                            <option>Pas mal</option>
                            <option>Bof</option>
                            <option>Nul</option>
                          </Form.Control>

                          <Button className="float-right" type="submit">Ajouter</Button>
                        </Form>
                      )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </Layout >
    );
  } else {
    return <Layout></Layout>;
  }
};

export default History;
