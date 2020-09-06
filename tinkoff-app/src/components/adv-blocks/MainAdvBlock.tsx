import React from 'react';
import { createStyles, makeStyles, useMediaQuery } from '@material-ui/core';
import { MobileContent } from './MobileContent';
import { DesktopContent } from './DesktopContent';

export type TComponentData = {
  id: number;
  title: string;
  subTitle: string;
  button: {
    text: string;
    link: string;
  };
  image?: {
    src: string;
    srcSet: string;
    mobile: {
      img: string;
      webp: string;
    };
    tablet: {
      img: string;
      webp: string;
    };
    desktop: {
      img: string;
      webp: string;
    };
    alt: string;
  };
};

const firstAdvBlockData: TComponentData[] = [
  {
    id: 1,
    title: 'Счет для бизнеса',
    subTitle: 'До 3% на остаток. Открытие и обслуживание счета — от 0 рублей. Все онлайн',
    button: {
      text: 'Открыть счет',
      link: '/open-business/',
    },
    image: {
      src: '',
      srcSet: '',
      mobile: {
        img: '',
        webp: '',
      },
      tablet: {
        img: '',
        webp: '',
      },
      desktop: {
        img:
          'https://acdn.tinkoff.ru/static/pages/files/f9eff401-773f-4f18-a373-7a858158a426.png 1x, https://acdn.tinkoff.ru/static/pages/files/667a9c55-0ced-4766-8d79-7ec32c358e15.png 2x',
        webp:
          'https://acdn.tinkoff.ru/static/pages/files/ea723822-d5e8-4c34-9cf0-159dec5f76bc.webp 1x, https://acdn.tinkoff.ru/static/pages/files/63b6cdcc-7f5e-4f6b-a499-9ee218be67c2.webp 2x',
      },
      alt: 'Мужчина с котенком',
    },
  },
  {
    id: 2,
    title: 'Инвестиции премиум',
    subTitle: 'IPO, еврооблигации, ETF, азиатские и европейские бумаги',
    button: {
      text: 'Стать инвестором',
      link: '/open-investor/',
    },
  },
];

const useStyles = makeStyles(theme =>
  createStyles({
    wrapper: {
      backgroundColor: theme.palette.grey[500],
      paddingTop: theme.spacing(2),
      '@media (min-width:768px)': {
        height: '448px',
        paddingTop: 0,
      },
      '@media (min-width: 1360px)': {
        height: '480px',
      },
    },
  })
);

export const MainAdvBlock: React.FC = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width: 768px)');
  const item = Math.floor(Math.random() * firstAdvBlockData.length);
  let data = firstAdvBlockData[item];

  return <div className={classes.wrapper}>{matches ? <MobileContent {...data} /> : <DesktopContent {...data} />}</div>;
};
