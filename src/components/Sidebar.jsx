import React, { useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { IoIosHeart } from "react-icons/io";
import { FaRegSadTear } from "react-icons/fa";
import axios from "axios";
import Context from "../context/";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { dataList, setDataList, setCircusSelected } = useContext(Context);
  const { reload } = useContext(Context);

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
  }, [reload]);

  if (dataList) {
    const MakeSomeStars = index => {
      switch (dataList[index].note) {
        case "Excellent":
          return (
            <div>
              <IoIosHeart />
              <IoIosHeart />
              <IoIosHeart />
              <IoIosHeart />
              <IoIosHeart />
            </div>
          );
        case "Génial":
          return (
            <div>
              <IoIosHeart />
              <IoIosHeart />
              <IoIosHeart />
              <IoIosHeart />
            </div>
          );
        case "Sympa":
          return (
            <div>
              <IoIosHeart />
              <IoIosHeart />
              <IoIosHeart />
            </div>
          );
        case "Pas mal":
          return (
            <div>
              <IoIosHeart />
              <IoIosHeart />
            </div>
          );
        case "Bof":
          return (
            <div>
              <IoIosHeart />
            </div>
          );
        case "Nul":
          return (
            <div>
              <FaRegSadTear />
              <FaRegSadTear />
              <FaRegSadTear />
            </div>
          );

        default:
          return <div></div>;
      }
    };

    return (
      <Container>
        {dataList.map((review, index) => (
          <Card
            key={index}
            style={{ marginBottom: "20px" }}
            className="text-white bg-dark"
          >
            <Link
              to="/circus"
              onClick={() => setCircusSelected(review.idcircus)}
            >
              <Card.Header className="d-flex justify-content-between align-items-center">
                <div>{review.name}</div>
                <div>{MakeSomeStars(index)}</div>
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
            </Link>
          </Card>
        ))}
      </Container>
    );
  } else {
    return <div></div>;
  }
};

export default Sidebar;
