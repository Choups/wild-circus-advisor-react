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
  const { connectedUser, setConnectedUser } = React.useContext(Context);

  useEffect(() => {
    fetch("api/user/verify", {
      method: "POST",
      headers: new Headers({
        Authorization: "Bearer " + localStorage.getItem("token")
      })
    })
      .then(res => res.json())
      .then(data => setConnectedUser(data.result[0].iduser))
      .catch(err => setIsLoggedIn("no-access"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectedUser]);

  if (isLoggedIn === "no-access") {
    return <Redirect to="/login" />;
  }

  return (
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
      <NavbarComp />
      <Row noGutters>
        <Col
          sm={3}
          className="scrollhide"
          style={{ maxHeight: "100vh", overflow: "auto", paddingTop: "80px" }}
        >
          <Sidebar />
        </Col>
        <Col
          sm={9}
          style={{ maxHeight: "100vh", overflow: "auto", paddingTop: "80px" }}
        >
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
