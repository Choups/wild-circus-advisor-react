import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { IoIosHeart } from "react-icons/io";
import axios from "axios";

const Sidebar = ({ parent }) => {
  const [dataList, setDataList] = useState();

  //FETCH REVIEWS FROM SELECTED CIRCUS
  useEffect(() => {
    axios
      .get(`/api/reviews`)
      .then(function(response) {
        // handle success
        setDataList(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (dataList) {
    return (
      <Container
        className="scrollhide"
        style={{ maxHeight: "90vh", overflow: "auto" }}
      >
        {dataList.map(review => (
          <Card style={{ marginBottom: "20px" }}>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <div>{review.name}</div>
              <div>
                {review.note === "Excellent" ? (
                  <span>
                    <IoIosHeart />
                    <IoIosHeart />
                    <IoIosHeart />
                    <IoIosHeart />
                    <IoIosHeart />
                  </span>
                ) : "Génial" ? (
                  <span>
                    <IoIosHeart />
                    <IoIosHeart />
                    <IoIosHeart />
                    <IoIosHeart />
                  </span>
                ) : "Sympa" ? (
                  <span>
                    <IoIosHeart />
                    <IoIosHeart />
                    <IoIosHeart />
                  </span>
                ) : "Pas mal" ? (
                  <span>
                    <IoIosHeart />
                    <IoIosHeart />
                  </span>
                ) : "Bof" ? (
                  <span>
                    <IoIosHeart />
                  </span>
                ) : (
                  ""
                )}
              </div>
              <img
                src={review.image}
                alt={review.name}
                style={{ height: "35px", borderRadius: "10px" }}
              />
            </Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>{review.review}</p>
                <footer className="blockquote-footer">
                  <cite>
                    le {review.date} à {review.city} par{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {review.firstname} {review.lastname}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        ))}
      </Container>
    );
  } else {
    return <div></div>;
  }
};

export default Sidebar;
