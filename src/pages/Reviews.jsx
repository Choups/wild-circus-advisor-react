import React, { useEffect, useContext, useState } from "react";
import Container from "react-bootstrap/Container";

import Layout from "../layouts/general";
import axios from "axios";
import Context from "../context/";

import { Link } from "react-router-dom";

const Reviews = () => {
  const { circusSelected, connectedUser, circusList } = useContext(Context);

  const [dataList, setDataList] = useState();

  //FETCH REVIEWS FROM SELECTED CIRCUS
  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get(`/api/history/all/${circusSelected}`)
      .then(function (response) {
        // handle success
        setDataList(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectedUser]);

  if (dataList && circusList && circusSelected) {
    const dataCircusSelected = circusList.filter(
      circus => circus.idcircus === circusSelected
    );
    console.log(dataCircusSelected, dataList);
    return (
      <Layout>
        <Container fluid>
          <p>{dataCircusSelected[0].name}</p>
          <p>{dataCircusSelected[0].image}</p>
          <p>{dataCircusSelected[0].firstname}</p>
          <p>{dataCircusSelected[0].lastname}</p>
          <p>{dataCircusSelected[0].content}</p>

          {dataList.map((review, index) => (
            <p key={index}>
              {review.date.substring(0, 10)} / {review.review} / {review.firstname} /{" "}
              {review.lastname} / {review.city} / {review.note}
            </p>
          ))}
          <Link to="/circus">Réserver</Link>
          <Link to="/dashboard">Retour</Link>
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

export default Reviews;
