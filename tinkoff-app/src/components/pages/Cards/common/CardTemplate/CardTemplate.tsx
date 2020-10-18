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
    wrapper, mainGrayBg, wrapperHover,
    secondGrayBg, colorHoverCardTitle, showCard,
    description, descriptionMain, descriptionSecond
  } = useStyles();
  const history = useHistory();
  const { breakpoints } = useTheme();
  const { isMain, desktop, mobile, cardTitle, cardLink } = props;
  const matches = useMediaQuery(breakpoints.up('lg'));

  const wrapperClasses = isMain
    ? clsx(wrapper, mainGrayBg, wrapperHover)
    : clsx(wrapper, secondGrayBg, colorHoverCardTitle, showCard);

  const descriptionClasses = isMain
    ? clsx(description, descriptionMain)
    : clsx(description, descriptionSecond);

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
      <div onClick={ historyPush } className={ wrapperClasses }>
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


