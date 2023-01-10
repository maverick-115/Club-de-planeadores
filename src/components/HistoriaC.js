import Card from "react-bootstrap/Card";
import historypic from "./assets/images/3794578_orig.jpg";
import { useTranslation } from "react-i18next";

const Historia = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <Card.Body>
        <Card.Img variant="bottom" src={historypic} />
        <Card.Text>
          {t("history-desc")}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Historia;
