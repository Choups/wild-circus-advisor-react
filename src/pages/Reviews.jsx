import React, { useEffect, useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Layout from "../layouts/general";
import axios from "axios";
import Context from "../context/";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link } from "react-router-dom";
import { IoIosHeart } from "react-icons/io";
import { FaRegSadTear } from "react-icons/fa";

const Reviews = () => {
  const { circusSelected, connectedUser, circusList } = useContext(Context);

  const [dataList, setDataList] = useState();

  //FETCH REVIEWS FROM SELECTED CIRCUS
  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get(`/api/history/all/${circusSelected}`)
      .then(function(response) {
        // handle success
        if (response.data[0].date) {
          setDataList(response.data);
        }
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectedUser]);

  if (dataList && circusList && circusSelected) {
    const MakeSomeStars = index => {
      switch (dataList[index].note) {
        case "5":
          return (
            <div>
              <IoIosHeart />
              <IoIosHeart />
              <IoIosHeart />
              <IoIosHeart />
              <IoIosHeart />
            </div>
          );
        case "4":
          return (
            <div>
              <IoIosHeart />
              <IoIosHeart />
              <IoIosHeart />
              <IoIosHeart />
            </div>
          );
        case "3":
          return (
            <div>
              <IoIosHeart />
              <IoIosHeart />
              <IoIosHeart />
            </div>
          );
        case "2":
          return (
            <div>
              <IoIosHeart />
              <IoIosHeart />
            </div>
          );
        case "1":
          return (
            <div>
              <IoIosHeart />
            </div>
          );
        case "0":
          return (
            <div className="text-danger bold">
              <FaRegSadTear />
            </div>
          );

        default:
          return <div></div>;
      }
    };

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
                <Link to="/circus">
                  <Button variant="outline-primary">Réserver</Button>
                </Link>
              </p>
            </Jumbotron>
          </Jumbotron>

          {dataList.map((review, index) => (
            <Card.Body className="reviewcard" key={index}>
              <blockquote className="blockquote mb-0">
                <p>{review.review}</p>
                <footer className="blockquote-footer review">
                  <cite>
                    le {review.date.substring(0, 10)} à {review.city} par{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {review.firstname} {review.lastname}
                    </span>
                  </cite>
                </footer>
              </blockquote>
              <div className="ratings">{MakeSomeStars(index)}</div>
            </Card.Body>
          ))}

          <Link to="/dashboard">
            <Button
              variant="outline-warning"
              style={{
                marginBottom: "20px",
                marginTop: "20px",
                marginRight: "20px"
              }}
            >
              Retour
            </Button>
          </Link>
          <Link to="/circus">
            <Button
              variant="primary"
              style={{ marginBottom: "20px", marginTop: "20px" }}
            >
              Réserver
            </Button>
          </Link>
        </Container>
      </Layout>
    );
  } else if (circusList && circusSelected) {
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
                <Link to="/circus">
                  <Button variant="outline-primary">Réserver</Button>
                </Link>
              </p>
            </Jumbotron>
          </Jumbotron>

          <p>Aucun avis</p>

          <Link to="/dashboard">
            <Button
              variant="outline-warning"
              style={{ marginBottom: "20px", marginRight: "20px" }}
            >
              Retour
            </Button>
          </Link>
          <Link to="/circus">
            <Button variant="primary" style={{ marginBottom: "20px" }}>
              Réserver
            </Button>
          </Link>
        </Container>
      </Layout>
    );
  } else {
    return <Layout></Layout>;
  }
};

export default Reviews;
