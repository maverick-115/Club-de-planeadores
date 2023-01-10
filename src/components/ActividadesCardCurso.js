import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import instrumental2 from "./assets/images/instrumental2.png";
import { useTranslation } from "react-i18next";


const ActividadesCardCurso = () => {
  const { t } = useTranslation();
  return (
    <Card style={{ width: "20rem" }} >
      <Card.Img variant="top" src={instrumental2} />
      <Card.Body className="card-body d-flex flex-column">
        <Card.Title>{t('card-pilot-title')}</Card.Title>
        <Card.Text>
        {t('card-pilot-desc')}
        </Card.Text>
        <Button variant="primary" className="btn-md mt-auto">{t('card-pilot-button')}</Button>
      </Card.Body>
    </Card>
  );
};

export default ActividadesCardCurso;
