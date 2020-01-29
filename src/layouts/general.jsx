import React from "react";
import Container from "react-bootstrap/Container";
import NavbarComp from "../components/NavbarComp";
import Sidebar from "../components/Sidebar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Layout = ({ children }) => {
  return (
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
      <NavbarComp />
      <Row noGutters>
        <Col sm={3}>
          <Sidebar />
        </Col>
        <Col sm={9}>{children}</Col>
      </Row>
    </Container>
  );
};

export default Layout;
