import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3"> Copyright &copy; ProShop</Col>
          {/* here text-center will center the text and py-3 will give padding of 3 in y axis */}
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
