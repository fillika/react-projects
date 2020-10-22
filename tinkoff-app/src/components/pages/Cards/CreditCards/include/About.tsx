import React from "react";
import { useStyles } from "../../common/style";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { IcardsState } from "../../../../../redux/reducer";

export const About: React.FC = () => {
  const { textWrapper, description, showDescription, hideTitle, button } = useStyles();

  /**
   * There I'll get data from redux store (all cards)
   * Also use hook for dispatch
   */
  const { showMoreInfo } = useSelector((state: IcardsState) => state.cards.credit);
  const dispatch = useDispatch();

  const descriptionClsx = showMoreInfo
    ? clsx(description, showDescription)
    : description;

  return (
    <div className={ textWrapper }>
      <p style={ { color: "#666" } } className={ showMoreInfo ? hideTitle : '' }>
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
  );
};

