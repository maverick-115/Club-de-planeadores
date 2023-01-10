import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import bautismo2 from "./assets/images/bautismo2.png";
import { useTranslation } from "react-i18next";

const ActividadesCardBautismo = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={bautismo2} />
      <Card.Body className="card-body d-flex flex-column">
        <Card.Title>{t('card-baptism-title')}</Card.Title>
        <Card.Text>
        {t('card-baptism-desc')}
        </Card.Text>
        <Button variant="primary" className="btn-md mt-auto">{t('card-baptism-button')}</Button>
      </Card.Body>
    </Card>
  );
};

export default ActividadesCardBautismo;
