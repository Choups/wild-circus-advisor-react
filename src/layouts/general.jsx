import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <Container>{children}</Container>
      <Sidebar />
    </Container>
  );
};

export default Layout;
