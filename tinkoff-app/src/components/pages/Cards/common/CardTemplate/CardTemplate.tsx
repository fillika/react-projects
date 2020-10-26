import React, { MouseEvent } from "react";
import clsx from "clsx";

import { useMediaQuery, useTheme } from "@material-ui/core";
import { useStyles } from "./style";
import { IData } from "./types";

import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";

import { useHistory } from 'react-router-dom';

export const CardTemplate: React.FC<IData> = props => {
  const {
    wrapper, mainCredit, wrapperHover,
    secondGrayBg, colorHoverCardTitle, showCard,
    description, descriptionMain, descriptionSecond, mainDebit
  } = useStyles();

  const history = useHistory();
  const { breakpoints } = useTheme();
  const { isMain, desktop, mobile, cardTitle, cardLink, cardType } = props;
  const matches = useMediaQuery(breakpoints.up('lg'));

  const wrapperCredit = isMain
    ? clsx(wrapper, mainCredit, wrapperHover)
    : clsx(wrapper, secondGrayBg, colorHoverCardTitle, showCard);

  const wrapperDebit = isMain
    ? clsx(wrapper, mainDebit, wrapperHover)
    : clsx(wrapper, secondGrayBg, colorHoverCardTitle, showCard);

  const descriptionClasses = isMain
    ? clsx(description, descriptionMain)
    : clsx(description, descriptionSecond);

  const className = cardType === 'debit' ? wrapperDebit : wrapperCredit;

  /**
   * Функция создана для того, чтобы перенаправлять на форму заказа по клику
   * на карточку. Внутри идет проверка - если клик идет по кнопке (внутри карточки есть кнопки)
   * то мы ничего не делаем. А если клик по карточке, то с помощью history.push() перенаправляем
   * @param event
   */
  function historyPush(event: MouseEvent<HTMLElement>) {
    if (event.target instanceof HTMLElement) {
      const href = event.target.getAttribute('href');

      !href && history.push(cardLink);
    }
  }

  return (
    <div style={ { padding: '16px 0' } }>
      <div onClick={ historyPush } className={ className }>
        <span style={ { position: 'absolute', top: 0, lineHeight: 0, } }>
          <span className={ descriptionClasses } dangerouslySetInnerHTML={ { __html: cardTitle } }/>
        </span>

        {
          matches
            ? <Desktop { ...desktop } isMain={ isMain }/>
            : <Mobile { ...mobile } isMain={ isMain }/>
        }
      </div>
    </div>
  );
};


