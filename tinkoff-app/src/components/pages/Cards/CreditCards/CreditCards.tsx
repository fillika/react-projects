import React from "react";
import { Container } from "@material-ui/core";
import { CardTemplate } from "../common/CardTemplate";

export const CreditCards: React.FC = () => {
  return (
    <Container>
      <div>
        <p>Кредитная карта — лучший способ получить кредит до 2 000 000 ₽ с удобными условиями и доставкой.
          <span>Узнать больше</span>
        </p>

        <p>
          <span style={ { color: "#666" } }><strong>Кредитная карта </strong></span>
          <span
            style={ { color: "#909090" } }>— лучший способ получить кредит до&nbsp;2&nbsp;000&nbsp;000 ₽ с&nbsp;удобными
            условиями и&nbsp;доставкой в&nbsp;любую точку России.
            Тинькофф Банк одобрит кредитную карту за&nbsp;2&nbsp;минуты по&nbsp;паспорту и&nbsp;доставит
            ее&nbsp;бесплатно на&nbsp;дом за&nbsp;2&nbsp;дня. Оплачивайте покупки, не&nbsp;платите проценты
            до&nbsp;55 дней и&nbsp;получайте бонусы за&nbsp;каждую покупку по&nbsp;карте. Годовое обслуживание&nbsp;—
            от&nbsp;590&nbsp;₽. Бесплатное пополнение банковским переводом или у&nbsp;партнеров Тинькофф Банка.</span>
        </p>
      </div>

      <CardTemplate/>
    </Container>
  );
};