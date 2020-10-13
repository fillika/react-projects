import React, { useState } from "react";
import { TNavigation } from "../types";
import { useStyle } from "./style";
import clsx from "clsx";
import { Link } from "react-router-dom";

/**
 * Общий компонент рендера. Создана для того, чтобы отрисовывать меню и не дублировать код.
 * Так как у нас меню банка (первое по счету) рендерится отдельно.
 */
export const MenuList: React.FC<TNavigation> = props => {
  const classes = useStyle();
  const { id, headLink, listLink } = props;

  const [isActive, setActive] = useState(false);

  const activeClass = isActive
    ? clsx(classes.nonActive, classes.isActive)
    : classes.nonActive;

  const renderLinks = listLink.map(linkData => {
    const { to, name, isLink } = linkData;

    return (
      <li key={ to + name }>
        {
          isLink
            ? <a className={ classes.subMenuLink } target='_blank' rel='noopener noreferrer' href={ to }>{ name }</a>
            : <Link className={ classes.subMenuLink } to={ to }>{ name }</Link>
        }
      </li>
    );
  });

  return (
    <li key={ id }>
      <div className={ classes.headLinkWrapper }>
        <Link className={ classes.headLink } to={ headLink.to }>{ headLink.name }</Link>
        <span onClick={ () => setActive(!isActive) }>
          <svg
            className={ isActive ? clsx(classes.svg, classes.svgActive) : classes.svg }
            xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
            <path
              d='M7.707 10.293a1 1 0 00-1.414 1.414l4.294 4.294a1.995 1.995 0 002.826 0l4.294-4.294a1 1 0 00-1.414-1.414L12 14.586l-4.293-4.293z'
              fill='currentColor'/>
          </svg>
        </span>
      </div>

      <div className={ activeClass }>
        <ul className={ classes.subMenu }>
          { renderLinks }
        </ul>
      </div>
    </li>
  );
};