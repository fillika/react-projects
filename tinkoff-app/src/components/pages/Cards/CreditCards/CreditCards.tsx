import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import { CardTemplate } from "../common/CardTemplate";
import { secondCard } from "./data";
import renderOtherCards from "../common/helpers";
import { useDispatch, useSelector } from "react-redux";
import { IcardsState } from "../../../../redux/reducer";
import { checkCookieAndCleanLS, setCookie } from "../../../../helpers";
import { About } from "./include/About";
import { MoreButton } from "./include/MoreButton";

export const CreditCards: React.FC = () => {
  /**
   * There I'll get data from redux store (all cards)
   * Also use hook for dispatch
   */
  const { mainCard, showOther } = useSelector((state: IcardsState) => state.cards.credit);
  const dispatch = useDispatch();

  function getFetch(): void {
    const url = 'https://tinkoff-app.firebaseio.com/creditCards/mainCard.json';

    fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'GET_MAIN_CC_CARD', payload: json });
        localStorage.setItem('mainCard', JSON.stringify(json));
        setCookie('reactUser', 'session', { 'max-age': 14400 });
      });
  }

  useEffect(() => {
    if (mainCard === null) {
      checkCookieAndCleanLS('mainCard');

      const cardDataFromLS = localStorage.getItem('mainCard');

      /**
       * If I go to website first (localStorage has nothing)
       * I'll fetch data, create localStorage and setCookie
       */
      !cardDataFromLS
        ? getFetch()
        : dispatch({ type: 'GET_MAIN_CC_CARD', payload: JSON.parse(cardDataFromLS) });
    }
  });

  return (
    <Container>
      <About/>

      { mainCard && <CardTemplate { ...mainCard }/> }

      { showOther ? renderOtherCards(secondCard) : <MoreButton/> }

    </Container>
  );
};
