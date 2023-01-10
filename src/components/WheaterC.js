// 658dd8f508df156c7a3198e06517ee03

// https://api.openweathermap.org/data/2.5/weather?id=3435910&appid=f9597e05606c8d6e913d32b2c91fbd08

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WheaterCard from "./WheaterCardC";

const Wheater = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <section id="wheater" >
          <WheaterCard />
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Wheater;
