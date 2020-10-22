import React, { useEffect } from "react";
import { Button, Container } from "@material-ui/core";
import { CardTemplate } from "../common/CardTemplate";
import { secondCard } from "./data";
import { useStyles } from "../common/style";
import clsx from "clsx";
import renderOtherCards from "../common/helpers";
import { useDispatch, useSelector } from "react-redux";
import { IcardsState } from "../../../../redux/reducer";
import { checkCookieAndCleanLS, setCookie } from "../../../../helpers";

export const CreditCards: React.FC = () => {
  const { textWrapper, description, showDescription, hideTitle, button } = useStyles();
  const url = 'https://tinkoff-app.firebaseio.com/creditCards/mainCard.json';

  /**
   * There I'll get data from redux store (all cards)
   * Also use hook for dispatch
   */
  const { cards: { credit } } = useSelector((state: IcardsState) => state);
  const dispatch = useDispatch();

  const descriptionClsx = credit.showMoreInfo
    ? clsx(description, showDescription)
    : description;

  useEffect(() => {

    if (credit.mainCard === null) {
      checkCookieAndCleanLS('mainCard');

      const mainCard = localStorage.getItem('mainCard');

      if (!mainCard) {
        /**
         * If I go to website first (localStorage has nothing)
         * I'll fetch data, create localStorage and setCookie
         */
        fetch(url)
          .then(response => response.json())
          .then(json => {
            dispatch({ type: 'GET_MAIN_CC_CARD', payload: json });
            localStorage.setItem('mainCard', JSON.stringify(json));
            setCookie('reactUser', 'session', { 'max-age': 14400 });
          });

      } else {
        dispatch({ type: 'GET_MAIN_CC_CARD', payload: JSON.parse(mainCard) });
      }
    }

  }, []);

  return (
    <Container>
      <div className={ textWrapper }>
        <p style={ { color: "#666" } } className={ credit.showMoreInfo ? hideTitle : '' }>
          <strong>Кредитная карта</strong> — лучший способ получить кредит до 2&nbsp;000&nbsp;000&nbsp;₽ с удобными условиями и
          доставкой. <span
          className={ button } onClick={ () => dispatch({ type: 'SHOW_MORE_ABOUT_CC' }) }>Узнать больше</span>
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
        credit.mainCard !== null && <CardTemplate { ...credit.mainCard }/>
      }

      {
        credit.showOther
          ? renderOtherCards(secondCard)
          :
          <div style={ { textAlign: 'center' } }>
            <Button
              style={ { color: '#1771e6', border: '1px solid #1771e6', fontWeight: 400 } }
              onClick={ () => dispatch({ type: 'SHOW_OTHER_CC_CARDS' }) }>Показать остальные карты</Button>
          </div>
      }

    </Container>
  );
};
