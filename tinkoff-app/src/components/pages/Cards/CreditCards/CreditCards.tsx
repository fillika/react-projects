import React, { useState } from "react";
import { Button, Container } from "@material-ui/core";
import { CardTemplate } from "../common/CardTemplate";
import { IData } from "../common/CardTemplate/types";
import { mainCard, secondCard } from "./data";
import { useStyles } from "./style";
import clsx from "clsx";

export const CreditCards: React.FC = () => {
  const { description, showDescription, hideTitle, button } = useStyles();
  const [showOther, setShowOther] = useState(false);
  const [isShowMore, setShowMore] = useState(false);

  const descriptionClsx = isShowMore
    ? clsx(description, showDescription)
    : description;

  return (
    <Container>
      <div style={ { fontSize: '13px', padding: '16px 0', lineHeight: '20px' } }>
        <p className={ isShowMore ? hideTitle : '' }>
          Кредитная карта — лучший способ получить кредит до 2&nbsp;000&nbsp;000&nbsp;₽ с удобными условиями и
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

      <CardTemplate { ...mainCard }/>

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

/**
 * Функция принимает массив данных, который потом будем рендерить
 * в зависимости от переменной
 * @param data
 */
function renderOtherCards(data: IData[]) {
  return data.map((obj, idx) => {
    return <CardTemplate key={ idx + idx++ } { ...obj }/>;
  });
}