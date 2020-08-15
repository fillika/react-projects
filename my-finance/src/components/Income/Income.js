import React from 'react';
import {
  colors,
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
      category: 'Рестораны/Кафе',
      price: 11241,
      color: 'rgb(75, 208, 225)',
    },
    {
      category: 'Кино',
      price: 18563,
      color: 'rgb(255, 136, 99)',
    },
    {
      category: 'Одежда',
      price: 5768,
      color: 'rgb(143, 117, 209)',
    },
    {
      category: 'Дом, ремонт',
      price: 35000,
      color: 'rgb(79, 189, 178)',
    },
    {
      category: 'Мобильная связь',
      price: 1250,
      color: 'rgb(248, 163, 77)',
    },
    {
      category: 'Ж/д билеты',
      price: 5250,
      color: 'rgb(124, 174, 255)',
    },
    {
      category: 'Медицина',
      price: 1900,
      color: 'rgb(78, 182, 194)',
    },
    {
      category: 'Ювелирные изделия и часы',
      price: 1900,
      color: 'rgb(255, 183, 76)',
    },
    {
      category: 'Различные товары',
      price: 2563,
      color: 'rgb(255, 120, 167)',
    },
    {
      category: 'Транспорт',
      price: 800,
      color: 'rgb(248, 163, 77)',
    },
    {
      category: 'ЖКХ',
      price: 2300,
      color: 'rgb(188, 113, 201)',
    },
    {
      category: 'Супермаркеты',
      price: 6141,
      color: 'rgb(77, 195, 247)',
    },
  ];

  const operations = [
    {
      id: 1,
      date: '2020-08-01T14:16:39.211Z', // new Date().toISOString()
      name: 'Глобус',
      category: 'Супермаркеты',
      price: 1200,
      color: 'rgb(246, 141, 31)',
    },
    {
      id: 2,
      date: '2020-08-03T14:16:39.211Z', // new Date().toISOString()
      name: 'Fix price',
      category: 'Супермаркеты',
      price: 353,
      color: 'rgb(112 176 27)',
    },
    {
      id: 3,
      date: '2020-08-08T14:16:39.211Z', // new Date().toISOString()
      name: 'Дикси',
      category: 'Супермаркеты',
      price: 2121,
      color: 'rgb(239, 125, 5)',
    },
    {
      id: 4,
      date: '2020-08-11T14:16:39.211Z', // new Date().toISOString()
      name: 'Магнит',
      category: 'Супермаркеты',
      price: 1352,
      color: 'rgb(235, 30, 35)',
    },
    {
      id: 5,
      date: '2020-08-14T14:16:39.211Z', // new Date().toISOString()
      name: 'Перекресток',
      category: 'Супермаркеты',
      price: 1115,
      color: 'rgb(0, 82, 33)',
    },
    {
      id: 6,
      date: '2020-08-11T14:16:39.211Z', // new Date().toISOString()
      name: 'Авиакомпания Победа',
      category: 'Авиабилеты',
      price: 3896,
      color: 'rgb(11, 150, 212)',
    },
    {
      id: 7,
      date: '2020-08-11T14:16:39.211Z', // new Date().toISOString()
      name: 'Московский метрополитен',
      category: 'Транспорт',
      price: 614,
      color: 'rgb(255, 1, 0)',
    },
    {
      id: 8,
      date: '2020-08-11T14:16:39.211Z', // new Date().toISOString()
      name: 'Ar Doner',
      category: 'Фастфуд',
      price: 560,
      color: 'rgb(212, 93, 140)',
    },
    {
      id: 9,
      date: '2020-08-11T14:16:39.211Z', // new Date().toISOString()
      name: 'Burger King',
      category: 'Фастфуд',
      price: 100,
      color: 'rgb(0, 97, 169)',
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
          categoryArr.map(({ category, price, color }) => <Category
            key={category}
            text={category}
            color={color}
            price={price}/>)
        }
      </div>

      <div className={classes.wrapper}>
        <div>
          {
            operations.map(({ id, name, price, color }) => <Category
              key={id}
              text={name}
              color={color}
              price={price}/>)
          }
        </div>
      </div>

    </div>
  );
};

export default Income;
