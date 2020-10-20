import React, { useState } from "react";
import { useStyles } from "../common/style";
import { Button, Container } from "@material-ui/core";
import { CardTemplate } from "../common/CardTemplate";
import { mainCard, secondCard } from "./data";
import renderOtherCards from "../common/helpers";
import clsx from "clsx";

export const DebitCards: React.FC = () => {
  const { textWrapper, description, showDescription, hideTitle, button } = useStyles();
  const [showOther, setShowOther] = useState(false);
  const [isShowMore, setShowMore] = useState(false);

  const descriptionClsx = isShowMore
    ? clsx(description, showDescription)
    : description;

  return (
    <Container>
      <div className={ textWrapper }>
        <p style={ { color: "#666" } } className={ isShowMore ? hideTitle : '' }>
          <strong>Дебетовая карта&nbsp;</strong>&mdash; лучший способ оплачивать покупки и&nbsp;получать кэшбэк. С&nbsp;дебетовыми картами...<span
          className={ button } onClick={ () => setShowMore(!isShowMore) }>Узнать больше</span>
        </p>

        <p className={ descriptionClsx }>
          <span style={ { color: "#666" } }><strong>Дебетовая карта</strong></span>
          <span
            style={ { color: "#909090" } }>&mdash;&nbsp;лучший способ оплачивать покупки и&nbsp;получать кэшбэк. С&nbsp;дебетовыми картами Тинькофф Банка клиенты получают кэшбэк рублями или бонусами за&nbsp;каждую покупку. Пополняйте карты, снимайте наличные в&nbsp;любом банкомате, переводите деньги на&nbsp;карты любых банков без комиссии. Карты Mastercard и&nbsp;Visa с&nbsp;бесконтактной оплатой&nbsp;&mdash; от&nbsp;0&nbsp;₽ в&nbsp;месяц. Оформите дебетовую карту на&nbsp;сайте Тинькофф Банка, и&nbsp;мы&nbsp;бесплатно доставим ее&nbsp;в&nbsp;любую точку России.</span>
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