import React, { useState } from 'react';
import clsx from 'clsx';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(({ palette, spacing }) => ({
  category: {
    display: 'inline-flex',
    border: '1px solid #ecf1f7',
    borderRadius: 4,
    position: 'relative',
    overflow: 'hidden',
    marginRight: spacing(1) - 4,
    marginBottom: spacing(1),
    transition: '220ms opacity cubic-bezier(0.4, 0, 0.2, 1)',
  },
  categoryDisable: {
    opacity: 0.4,
  },
  closeButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: '#fff',
    borderRadius: 0,
    height: '100%',
    width: 36,
    transform: 'translateX(100%)',
    '&:hover': {
      backgroundColor: '#ecf1f7',
    },
  },
  closeIcon: {
    transition: '220ms all cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'rotate(0)',
  },
  closeIconDisabled: {
    transform: 'rotate(45deg)',
  },
  price: {
    paddingLeft: spacing(1) - 3,
    fontWeight: 700,
  },
  text: {
    paddingTop: spacing(1),
    paddingBottom: spacing(1),
    paddingLeft: spacing(4),
    paddingRight: spacing(2),
  },
  dot: {
    position: 'absolute',
    top: 'calc(50% - 5px)',
    left: 12,
    display: 'flex',
    width: 10,
    height: 10,
    borderRadius: 10,
  },
  dotDisable: {},
}));

const Category = ({ name, price }) => {
  const [isDisable, toggleDisable] = useState(false);
  const classes = useStyles();

  return (
    <div className={clsx(classes.category, 'category', { [classes.categoryDisable]: isDisable })}>
      <div className={clsx(classes.text, 'category__text')}>
        <div
          className={clsx(classes.dot, {})}
          style={{ backgroundColor: isDisable ? 'rgba(51,51,51,.24)' : createRandomColor() }}/>
        <div>{name}</div>
        <div
          className={clsx(classes.price, 'category__price')}>
          {price.toLocaleString('ru-RU')}
          <span>&nbsp;₽</span></div>
      </div>
      <IconButton
        onClick={() => toggleDisable(!isDisable)}
        className={
          clsx(classes.closeButton, 'category__button category__button--close')}>
        <CloseIcon
          className={clsx(classes.closeIcon, { [classes.closeIconDisabled]: isDisable })}
          fontSize='small'/>
      </IconButton>
    </div>
  );
};

export default Category;

/**
 * Функция генерирует 3 случайных числа и создает строку с цветом
 * @return {string} строка со случайным цветом
 */
const createRandomColor = () => {
  const x = Math.floor(Math.random() * 255);
  const y = Math.floor(Math.random() * 255);
  const z = Math.floor(Math.random() * 255);
  return `rgb(${x},${y},${z})`;
};
