import React from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { Card } from '../Common/Card';
import { TCard } from '../Common/Card/types';

import { useCommonStyles } from '../../commonStyles';

export const YouNeedToKnow: React.FC = () => {
  const commonClasses = useCommonStyles();

  const renderCards = cardsData.map(data => (
    <Card { ...data } key={ data.id }>
      <Button href={ data.link } className={ commonClasses.blueButton }>
        <span style={ { color: '#1771e6' } }>{ data.buttonText }</span>
      </Button>
    </Card>));

  return (
    <Container>
      <Typography variant='h2'>
        <p>Важно знать во время карантина</p>
      </Typography>

      <Grid spacing={ 6 } container>
        { renderCards }
      </Grid>
    </Container>
  );
};

const cardsData: TCard[] = [
  {
    id: 1,
    link: 'https://journal.tinkoff.ru/esli-net-raboty/?internal_source=home',
    title: null,
    subTitle: 'Что вам должны при потере работы и дохода',
    buttonText: 'Узнать больше',
    image: {
      alt: 'Что вам должны во время карантина',
      src: 'https://acdn.tinkoff.ru/static/pages/files/d37ec1f8-df60-4acb-aa0d-f2ace21ef656.png',
      srcSet: 'https://acdn.tinkoff.ru/static/pages/files/3a566fcf-cc21-4ac0-96ad-a2c215882a62.png 2x',
      webp: 'https://acdn.tinkoff.ru/static/pages/files/4e3f3753-4178-41c1-acca-59fe35303a55.webp 1x, https://acdn.tinkoff.ru/static/pages/files/e7c86d34-fab0-4bb5-b3c8-62e3ee49f484.webp 2x',
      mobile: {
        img: '',
        webp: '',
      },
    },
  },
  {
    id: 2,
    link: 'https://journal.tinkoff.ru/news/kreditnye-kanikuly-fl/?internal_source=home',
    title: null,
    subTitle: 'Кредитные каникулы: кто и как может получить',
    buttonText: 'Читать',
    image: {
      alt: 'Кредитные каникулы: кто и как может получить',
      src: 'https://acdn.tinkoff.ru/static/pages/files/acdf39e9-40a4-411b-9114-bb169ceae7ad.png',
      srcSet: 'https://acdn.tinkoff.ru/static/pages/files/bf35224c-e55f-439e-a6b7-d3ea4794eac0.png 2x',
      webp: 'https://acdn.tinkoff.ru/static/pages/files/b6311063-35cd-4f1c-98d2-989849ea432a.webp 1x, https://acdn.tinkoff.ru/static/pages/files/6292f8c3-5428-4c53-bb02-4a5332f39484.webp 2x',
      mobile: {
        img: '',
        webp: '',
      },
    },
  },
  {
    id: 3,
    link: 'https://journal.tinkoff.ru/guide/posobie-koronavirus/?internal_source=home',
    title: null,
    subTitle: 'Как получить повышенные пособия по безработице из-за короновируса',
    buttonText: 'Читать',
    image: {
      alt: 'Как получить повышенные пособия по безработице ',
      src: 'https://acdn.tinkoff.ru/static/pages/files/5d7f7a46-8a30-4d0b-bae5-c9c1dde30ff5.png',
      srcSet: 'https://acdn.tinkoff.ru/static/pages/files/ce33fdaf-c304-4093-8f95-7ac022028155.png 2x',
      webp: 'https://acdn.tinkoff.ru/static/pages/files/946fb9f4-b766-4b65-9a15-e8dbf805847e.webp 1x, https://acdn.tinkoff.ru/static/pages/files/0b068729-4fed-4e9c-9c7e-6b3e61656dda.webp 2x',
      mobile: {
        img: '',
        webp: '',
      },
    },
  },
];
