import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { IoIosHeart } from "react-icons/io";

const Sidebar = ({ parent }) => {
  return (
    <Container>
      <Card>
        <Card.Header>
          Cirque 1 - <IoIosHeart />
          <IoIosHeart />
          <IoIosHeart />
          <IoIosHeart />
          <IoIosHeart />
          <img
            src={
              "http://www.petit-bulletin.fr/multimedia/articles/2019-10-22-14-47-47_RESIZErsz1dsc1918editedit960x500.jpg"
            }
          />
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>Trop cool jadore lol bref tg</p>
            <footer className="blockquote-footer">
              <cite>le 20/05/2012 à Bordeaux par Alex Peyichout</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Sidebar;
