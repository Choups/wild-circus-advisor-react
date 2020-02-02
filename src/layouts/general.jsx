import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import NavbarComp from "../components/NavbarComp";
import Sidebar from "../components/Sidebar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Redirect } from "react-router-dom";
import Context from "../context/";


const Layout = ({ children, child }) => {
  const [isLoggedIn, setIsLoggedIn] = useState("access");
  const { connectedUser, setConnectedUser, setAnimation, animation } = React.useContext(Context);

  useEffect(() => {
    fetch("api/user/verify", {
      method: "POST",
      headers: new Headers({
        Authorization: "Bearer " + localStorage.getItem("token")
      })
    })
      .then(res => res.json())
      .then(data => setConnectedUser(data.result[0].iduser))
      .catch(err => setIsLoggedIn("no-access"))
      .finally(setTimeout(() => {
        setAnimation(false)
      }, 7000))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectedUser]);

  if (isLoggedIn === "no-access") {
    return <Redirect to="/login" />;
  }

  return (
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0, justifyContent: "space-evenely" }}>
      <NavbarComp />
      <Row noGutters>
        <Col
          sm={3}
          className={animation ? "scrollhide first-anim" : "scrollhide"}
          style={{ maxHeight: "100vh", overflow: "auto", paddingTop: "80px" }}
        >
          <Sidebar />
        </Col>
        <Col
          sm={6}
          className={animation ? "scrollhide third-anim" : "scrollhide"}
          style={{ maxHeight: "100vh", overflow: "auto", paddingTop: "80px" }}
        >
          {children}
        </Col>
        <Col
          sm={3}
          className={animation ? "scrollhide first-anim" : "scrollhide"}

        >
          <Row noGutters style={{ maxHeight: "30vh", paddingTop: "80px", zIndex: "300" }}>

            <div className="carouselimg"></div>
          </Row>
          <Row className="scrollhide" noGutters style={{ maxHeight: "59vh", overflow: "auto", marginTop: "100px" }}> <Sidebar /></Row>
        </Col>
      </Row>
    </Container >
  );
};

export default Layout;
