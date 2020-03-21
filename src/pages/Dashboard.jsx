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
      .get(`${process.env.REACT_APP_API_URL}/api/circus`)
      .then(function (response) {
        // handle success
        setCircusList(response.data);
      })
      .catch(function (error) {
        // handle error

      })
      .then(function () {
        // always executed

      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (circusList) {
    return (
      <Layout>
        <Container
          fluid
          className="dashboard"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly"


          }}
        >
          {circusList.map(circus => (
            <Card
              className="transcard adaptsize"
              key={circus.idcircus}
              style={{ width: "17rem", margin: "0px 10px 20px 10px" }}
            >
              <Card.Img
                variant="top"
                className="dashpic"
                src={circus.image}
                style={{ height: "auto" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between ">
                <Card.Title>{circus.name}</Card.Title>
                <Card.Text className="text-dark">{circus.content}</Card.Text>
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
