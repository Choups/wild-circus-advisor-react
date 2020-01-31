import React, { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Layout from "../layouts/general";
import Context from "../context/";
import axios from "axios";

const Dashboard = () => {
  const { circusList, setCircusList } = useContext(Context);
  const { setCircusSelected } = useContext(Context);

  //FETCH ALL CIRCUS
  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get("/api/circus")
      .then(function(response) {
        // handle success
        setCircusList(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
        console.log(circusList);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (circusList) {
    return (
      <Layout>
        <Container
          fluid
          style={{
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          {circusList.map(circus => (
            <Card
              key={circus.idcircus}
              style={{ width: "22rem", margin: "0px 20px 20px 20px" }}
            >
              <Card.Img
                variant="top"
                src={circus.image}
                style={{ height: "200px" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title>{circus.name}</Card.Title>
                <Card.Text>{circus.content}</Card.Text>
                <Row noGutters className="d-flex justify-content-between">
                  <Link
                    to="/circus"
                    onClick={() => setCircusSelected(circus.idcircus)}
                  >
                    <Button variant="primary">Réserver</Button>
                  </Link>
                  <Link
                    to="/reviews"
                    onClick={() => setCircusSelected(circus.idcircus)}
                  >
                    <Button variant="outline-secondary">Lire les avis</Button>
                  </Link>
                </Row>
              </Card.Body>
            </Card>
          ))}
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

export default Dashboard;
