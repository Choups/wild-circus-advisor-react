import React, { useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { IoIosHeart } from "react-icons/io";
import { FaRegSadTear } from "react-icons/fa";
import axios from "axios";
import Context from "../context/";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { dataList, setDataList, setCircusSelected, reviewLength, setReviewLength, popAnim, setPopAnim } = useContext(Context);
  const { reload } = useContext(Context);

  //FETCH REVIEWS FROM SELECTED CIRCUS
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/reviews`)
      .then(function (response) {
        // handle success
        setDataList(response.data);
        if (reviewLength < response.data.length) {
          setPopAnim(true)
          setReviewLength(response.data.length)
        }

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      }).finally(

        setTimeout(() => {
          !popAnim &&
            setPopAnim(false)
        }, 2000)

      );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);



  if (dataList) {
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
      <Container>
        {dataList.map((review, index) => (
          <Card className={popAnim ? "popAnim" : ""} key={index} style={{ marginBottom: "20px", backgroundColor: "rgba(255,255,255,0.1)", border: "none" }} >
            <Link
              to="/circus"
              onClick={() => setCircusSelected(review.idcircus)}

            >
              <Card.Header className="d-flex justify-content-between align-items-center text-secondary" style={{ border: "none" }}>
                <div><img
                  src={review.image}
                  alt={review.name}
                  style={{ height: "35px", width: "35px", borderRadius: "50%", marginRight: "10px" }}
                />{review.name}</div>
                <div className="ratings">{MakeSomeStars(index)}</div>

              </Card.Header>
              <Card.Body className="transcard2">
                <blockquote className="blockquote mb-0">
                  <p>{review.review}</p>
                  <footer className="blockquote-footer">
                    <cite>
                      le {review.date.substring(0, 10)} à {review.city} par{" "}
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
