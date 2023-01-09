import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ActividadesCardCurso from "./ActividadesCardCurso";
import ActividadesCardBautismo from "./ActividadesCardBautismo";
import ActividadesCardDeportivo from "./ActividadesCardDeportivo";

const Actividades = () => {
  return (
    <Container fluid className="mb-1">
      <Row >
        <Col md={6} lg={4}  className="mb-2">
          <ActividadesCardCurso ></ActividadesCardCurso>
        </Col>
        <Col md={6} lg={4}  className="mb-2 justify-content-center">
          <ActividadesCardBautismo></ActividadesCardBautismo>
        </Col>
        <Col md={12} lg={4} className="mb-2 ">
          <ActividadesCardDeportivo></ActividadesCardDeportivo>
        </Col>
      </Row>
    </Container>

    
  );
};

export default Actividades;
