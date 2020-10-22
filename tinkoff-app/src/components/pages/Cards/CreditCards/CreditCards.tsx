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
  const { cards: { credit } } = useSelector((state: IcardsState) => state);
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
    if (credit.mainCard === null) {
      checkCookieAndCleanLS('mainCard');

      const mainCard = localStorage.getItem('mainCard');

      /**
       * If I go to website first (localStorage has nothing)
       * I'll fetch data, create localStorage and setCookie
       */
      !mainCard
        ? getFetch()
        : dispatch({ type: 'GET_MAIN_CC_CARD', payload: JSON.parse(mainCard) });
    }
  }, []);

  return (
    <Container>
      <About/>

      { credit.mainCard && <CardTemplate { ...credit.mainCard }/> }

      { credit.showOther ? renderOtherCards(secondCard) : <MoreButton/> }

    </Container>
  );
};
