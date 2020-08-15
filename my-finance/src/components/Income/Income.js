import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import './category.scss';
import Category from './Category';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(({ palette, spacing }) => ({
  wrapper: {
    borderTop: '1px solid',
    borderBottom: '1px solid',
    borderBottomColor: palette.primary.light,
    borderTopColor: palette.primary.light,
    paddingTop: spacing(2),
    paddingBottom: spacing(2),
    marginTop: spacing(2),
  },
}));

const Income = () => {
  const classes = useStyles();

  const categoryArr = [
    {
      name: 'Рестораны/Кафе',
      price: 11241,
    },
    {
      name: 'Продукты',
      price: 18563,
    },
    {
      name: 'Одежда',
      price: 5768,
    },
    {
      name: 'Покупки',
      price: 35000,
    },
    {
      name: 'Платежи по кредитам',
      price: 1250,
    },
    {
      name: 'Развлечения',
      price: 5250,
    },
    {
      name: 'Медицина',
      price: 1500,
    },
  ];

  return (
    <div>
      <Typography
        align='center'
        variant='h2'>
        Доходы / расходы
      </Typography>
      <div className={classes.wrapper}>
        {
          categoryArr.map(({ name, price }) => <Category
            name={name}
            price={price}/>)
        }
      </div>

    </div>
  );
};

export default Income;
