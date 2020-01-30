import React, { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
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
      <Layout child="dashboard">
        <Container
          fluid
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
          }}
        >
          {circusList.map(circus => (
            <Card
              key={circus.idcircus}
              style={{ width: "18rem", margin: "20px" }}
            >
              <Card.Img variant="top" src={circus.image} />
              <Card.Body>
                <Card.Title>{circus.name}</Card.Title>
                <Card.Text>{circus.content}</Card.Text>
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
                  <Button variant="primary">Lire les avis</Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </Container>
      </Layout>
    );
  } else {
    return (
      <Layout child="dashboard">
        <div></div>
      </Layout>
    );
  }
};

export default Dashboard;
