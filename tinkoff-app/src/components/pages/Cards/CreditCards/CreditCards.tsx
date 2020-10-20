import React, { useEffect, useState } from "react";
import { Button, Container } from "@material-ui/core";
import { CardTemplate } from "../common/CardTemplate";
import { secondCard } from "./data";
import { useStyles } from "../common/style";
import clsx from "clsx";
import renderOtherCards from "../common/helpers";
import { IData } from "../common/CardTemplate/types";

export const CreditCards: React.FC = () => {
  const { textWrapper, description, showDescription, hideTitle, button } = useStyles();
  const [showOther, setShowOther] = useState(false);
  const [isShowMore, setShowMore] = useState(false);
  const [mainCard, setMainCard] = useState<null | IData>(null);

  const descriptionClsx = isShowMore
    ? clsx(description, showDescription)
    : description;

  useEffect(() => {
    const url = 'https://tinkoff-app.firebaseio.com/creditCards/mainCard.json';

    fetch(url)
      .then(response => response.json())
      .then(json => setMainCard(json));

  }, []);

  return (
    <Container>
      <div className={ textWrapper }>
        <p style={ { color: "#666" } } className={ isShowMore ? hideTitle : '' }>
          <strong>Кредитная карта</strong> — лучший способ получить кредит до 2&nbsp;000&nbsp;000&nbsp;₽ с удобными условиями и
          доставкой. <span className={ button } onClick={ () => setShowMore(!isShowMore) }>Узнать больше</span>
        </p>

        <p className={ descriptionClsx }>
          <span style={ { color: "#666" } }><strong>Кредитная карта </strong></span>
          <span
            style={ { color: "#909090" } }>— лучший способ получить кредит до 2&nbsp;000&nbsp;000 ₽ с&nbsp;удобными
            условиями и&nbsp;доставкой в&nbsp;любую точку России.
            Тинькофф Банк одобрит кредитную карту за&nbsp;2&nbsp;минуты по&nbsp;паспорту и&nbsp;доставит
            ее&nbsp;бесплатно на&nbsp;дом за&nbsp;2&nbsp;дня. Оплачивайте покупки, не&nbsp;платите проценты
            до&nbsp;55 дней и&nbsp;получайте бонусы за&nbsp;каждую покупку по&nbsp;карте. Годовое обслуживание&nbsp;—
            от&nbsp;590&nbsp;₽. Бесплатное пополнение банковским переводом или у&nbsp;партнеров Тинькофф Банка.</span>
        </p>
      </div>

      {
        mainCard !== null && <CardTemplate { ...mainCard }/>
      }

      {
        showOther
          ? renderOtherCards(secondCard)
          :
          <div style={ { textAlign: 'center' } }>
            <Button
              style={ { color: '#1771e6', border: '1px solid #1771e6', fontWeight: 400 } }
              onClick={ () => setShowOther(true) }>Показать остальные карты</Button>
          </div>
      }

    </Container>
  );
};
