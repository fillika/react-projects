import React from 'react';

import { Container, Typography, Grid } from '@material-ui/core';

import { ServiceCard } from '../Common/ServiceCard';

import { useStyles } from './style';
import { TServiceCardProps } from '../Common/ServiceCard/types';

export const Services: React.FC = () => {
  const classes = useStyles();
  const renderCards = serviceCardsData.map(data => (
    <Grid key={data.id} xs={12} md={6} item>
      <ServiceCard {...data} />
    </Grid>
  ));

  return (
    <Container className={classes.container}>
      <Typography variant='h2'>
        <p className={classes.title}>Сервисы и услуги</p>
      </Typography>

      <Grid className={classes.gridContainer} container spacing={6}>
        {renderCards}
      </Grid>
    </Container>
  );
};

const serviceCardsData: TServiceCardProps[] = [
  {
    id: 1,
    link: '/cardtocard/',
    title: 'Переводы и пополнения',
    src: 'https://acdn.tinkoff.ru/static/pages/files/e6e00c5a-082d-49a5-aa9b-750fc0882f1c.svg',
    smallText: 'С карты на карту или на счет в Тинькофф',
    pseudoLink: 'Пополнить или перевести',
  },
  {
    id: 2,
    link: '/maps/atm/?partner=tcs',
    title: 'Снятие наличных',
    src: 'https://acdn.tinkoff.ru/static/pages/files/3bebc25d-073c-4d16-9ca8-65a7d54884a3.svg',
    smallText: 'В банкоматах Тинькофф без комиссии. И без карты, если у Вас смартфон',
    pseudoLink: 'Найти банкомат',
  },
];
