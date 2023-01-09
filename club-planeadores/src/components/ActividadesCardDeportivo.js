import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import planeador2 from "./assets/images/planeador2.png";
import { useTranslation } from "react-i18next";

const ActividadesCardDeportivo = () => {
  const { t } = useTranslation();
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={planeador2} />
      <Card.Body className="card-body d-flex flex-column">
        <Card.Title>{t('card-deportive-title')}</Card.Title>
        <Card.Text>
          {t('card-deportive-desc')}
        </Card.Text>
        <Button variant="primary" className="btn-md mt-auto">{t('card-deportive-button')}</Button>
      </Card.Body>
    </Card>
  );
};

export default ActividadesCardDeportivo;
