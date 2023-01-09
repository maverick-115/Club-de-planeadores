import Container from "react-bootstrap/Container";
import facebook from "./assets/icons/facebook.png";
import whatsapp from "./assets/icons/whatsapp.png";
import instagram from "./assets/icons/instagram.png";
import youtube from "./assets/icons/youtube.png";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer  className="footer">
      <Container fluid>
        <Row>
          <Col size={12}  className="text-center text-sm-end">
            <div className="social-icon">
              <img
                alt=""
                src={facebook}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              <img
                alt=""
                src={whatsapp}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              <img
                alt=""
                src={instagram}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              <img
                alt=""
                src={youtube}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
            </div>
            <p>{t('design')}Cristian Lizardía</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
