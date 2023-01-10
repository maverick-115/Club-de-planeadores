import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { useTranslation } from "react-i18next";

const WheaterCard = () => {
  const { t } = useTranslation();
  return (

    <Card className="text-center">
      <Card.Header>{t('weather-title')}</Card.Header>
      <Card.Body>
        <Card.Title>{t('weather-wind')}</Card.Title>
        <Card.Text>
          <Badge bg="primary">8.7KT</Badge>
        </Card.Text>
        <Card.Title>{t('weather-humidity')}</Card.Title>
        <Card.Text>
          <Badge bg="primary">8.7KT</Badge>
        </Card.Text>
        <Card.Title>{t('weather-cloudiness')}</Card.Title>
        <Card.Text>
          <Badge bg="primary">8.7KT</Badge>
        </Card.Text>
        <Card.Title>{t('weather-precipitation')}</Card.Title>
        <Card.Text>
          <Badge bg="primary">8.7KT</Badge>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{t('weather-actualization')}</Card.Footer>
    </Card>
  );
};

export default WheaterCard;
