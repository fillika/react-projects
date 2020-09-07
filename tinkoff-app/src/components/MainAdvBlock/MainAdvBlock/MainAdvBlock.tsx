import React from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { MobileContent } from '../MobileContent';
import { DesktopContent } from '../DesktopContent';
import { useStyles } from './style';
import {TComponentData} from '../types';

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
      src: 'https://acdn.tinkoff.ru/static/pages/files/cc67d145-fbce-472f-a07c-8e15e9460d8f.png',
      srcSet: 'https://acdn.tinkoff.ru/static/pages/files/c76b8bc4-7fcd-4baf-9c80-4f5535e5a798.png 2x',
      mobile: {
        img:
          'https://acdn.tinkoff.ru/static/pages/files/918e68e9-a79c-4313-a676-ef51ecf21e1c.png 1x, https://acdn.tinkoff.ru/static/pages/files/9ac19c7b-69d8-489f-b19c-1d578b53f7ad.png 2x',
        webp:
          'https://acdn.tinkoff.ru/static/pages/files/dde9e3e2-be0a-4689-a332-37f5b75c4e2f.webp 1x, https://acdn.tinkoff.ru/static/pages/files/7f093359-43b4-4b02-a3b9-283ea151d5d7.webp 2x',
      },
      tablet: {
        webp:
          'https://acdn.tinkoff.ru/static/pages/files/4ad53bb5-7e4e-40cf-adef-1c5fc3bf4f88.webp 1x, https://acdn.tinkoff.ru/static/pages/files/e4e0004e-03be-400d-9118-f966b1572979.webp 2x',
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
    title: 'Тинькофф Инвестиции',
    subTitle: 'Советы по выбору акций, понятные тарифы и удобное приложение',
    button: {
      text: 'Стать инвестором',
      link: '/open-investor/',
    },
    image: {
      alt: 'Тинькофф Инвестиции',
      src: 'https://acdn.tinkoff.ru/static/pages/files/a3bdcb2e-0ae4-4040-a835-e2772baf44f0.png',
      srcSet: 'https://acdn.tinkoff.ru/static/pages/files/8e24d55b-014a-4c16-83fc-3c32a6255630.png 2x',
      mobile: {
        img:
          'https://acdn.tinkoff.ru/static/pages/files/50b8885a-d25b-49dc-b30e-f6d2cb625cd7.png 1x, https://acdn.tinkoff.ru/static/pages/files/2ec2b0ee-0344-4721-a524-277b11541390.png 2x',
        webp:
          'https://acdn.tinkoff.ru/static/pages/files/8ab13095-117f-4ffb-b2b3-85055c536113.webp 1x, https://acdn.tinkoff.ru/static/pages/files/f1827434-4876-4e8d-a21d-3b03bf574e18.webp 2x',
      },
      tablet: {
        webp:
          'https://acdn.tinkoff.ru/static/pages/files/62f23f37-e160-4dd4-a54c-93179ea6c3f1.webp 1x, https://acdn.tinkoff.ru/static/pages/files/961650f9-60f0-4822-b750-d8ed51aaca23.webp 2x',
      },
      desktop: {
        img:
          'https://acdn.tinkoff.ru/static/pages/files/59c67dfb-0b21-4ddb-b595-23c65a9ce716.png 1x, https://acdn.tinkoff.ru/static/pages/files/5ca883f7-e519-49fb-8f05-6e9e8997ded0.png 2x',
        webp:
          'https://acdn.tinkoff.ru/static/pages/files/886865c3-b203-4287-b9a4-73bc4aa65710.webp 1x, https://acdn.tinkoff.ru/static/pages/files/eebc4360-4000-4886-b87b-55be1c2009e2.webp 2x',
      },
    },
  },
  {
    id: 3,
    title: 'Дебетовая карта у вас уже сегодня',
    subTitle: 'Карта с кешбеком до 30%. Оформите и пользуйтесь сразу - через приложение',
    button: {
      text: 'Оформить карту',
      link: '/create-debit/',
    },
    image: {
      alt: 'Дебетовая карта Тинькофф',
      src: 'https://acdn.tinkoff.ru/static/pages/files/bba763d6-1c02-4dfe-ab7f-4900a2171592.png',
      srcSet: 'https://acdn.tinkoff.ru/static/pages/files/7a3e0a13-7a16-4f8b-95ac-7c7599b28483.png 2x',
      mobile: {
        img:
          'https://acdn.tinkoff.ru/static/pages/files/0bde651b-dbce-483a-973a-21f1cf7e4783.png 1x, https://acdn.tinkoff.ru/static/pages/files/762afc52-6d31-493b-8a3f-0367e761603c.png 2x',
        webp:
          'https://acdn.tinkoff.ru/static/pages/files/52cb72f8-c9d7-4be8-8445-4c7221ed7b99.webp 1x, https://acdn.tinkoff.ru/static/pages/files/ccb03e9c-6aa8-422a-a1d9-ea372aad14a9.webp 2x',
      },
      tablet: {
        webp:
          'https://acdn.tinkoff.ru/static/pages/files/24903d7c-1e2b-4c66-9fdf-dcbb8a15fd7d.webp 1x, https://acdn.tinkoff.ru/static/pages/files/d0a64c38-7086-4f91-9bdb-c987262ea6e1.webp 2x',
      },
      desktop: {
        img:
          'https://acdn.tinkoff.ru/static/pages/files/31724639-7750-43d3-bf9a-d93ace326323.png 1x, https://acdn.tinkoff.ru/static/pages/files/70312ea3-9e9f-4de8-aa65-981b3b627eab.png 2x',
        webp:
          'https://acdn.tinkoff.ru/static/pages/files/12b95961-1b70-4a08-9bb3-fbecd62863ab.webp 1x, https://acdn.tinkoff.ru/static/pages/files/4bb6ef14-c252-483e-9f5b-2138481983c3.webp 2x',
      },
    },
  },
  {
    id: 4,
    title: 'Страхование ОСАГО',
    subTitle: 'Электронный полис с онлайн-калькулятором и скидками за безаварийность',
    button: {
      text: 'Рассчитать стоимость',
      link: '/insurance/osago/',
    },
    image: {
      alt: 'Страхование ОСАГО Тинькофф',
      src: 'https://acdn.tinkoff.ru/static/pages/files/9e0f4857-32bf-4163-af86-f84a55349adb.png',
      srcSet: 'https://acdn.tinkoff.ru/static/pages/files/8b4da819-3999-4722-8600-c9b9212d414e.png 2x',
      mobile: {
        img:
          'https://acdn.tinkoff.ru/static/pages/files/d57b1f67-ffdf-4980-84ca-71cc5a229ef2.png 1x, https://acdn.tinkoff.ru/static/pages/files/864e6c58-a0d8-4e0c-9244-318e66c6cbbb.png 2x',
        webp:
          'https://acdn.tinkoff.ru/static/pages/files/d486fbfa-4716-4195-bbf9-0a11aa560849.webp 1x, https://acdn.tinkoff.ru/static/pages/files/04dfaafd-281f-405f-8cb3-0e1087b0ec1d.webp 2x',
      },
      tablet: {
        webp:
          'https://acdn.tinkoff.ru/static/pages/files/a4994849-3392-43ea-bde5-a17c27b45674.webp 1x, https://acdn.tinkoff.ru/static/pages/files/493aa19c-0a2e-4822-98a9-e3f0d85f6688.webp 2x',
      },
      desktop: {
        img:
          'https://acdn.tinkoff.ru/static/pages/files/419161ec-56dc-4efd-8588-172f056d042e.png 1x, https://acdn.tinkoff.ru/static/pages/files/992663b9-ae8d-423e-a337-36cc327d76d7.png 2x',
        webp:
          'https://acdn.tinkoff.ru/static/pages/files/916fbf3e-7dd3-4e3f-940d-785258070ab2.webp 1x, https://acdn.tinkoff.ru/static/pages/files/4ec315db-4648-40c5-944e-bdfc1a6898f4.webp 2x',
      },
    },
  },
  {
    id: 5,
    title: 'Кредит наличными',
    subTitle: 'До 15 млн рублей уже завтра',
    button: {
      text: 'Получить',
      link: '/loans/cash/',
    },
    image: {
      alt: 'Кредит наличными Тинькофф',
      src: 'https://acdn.tinkoff.ru/static/pages/files/5923d8e1-80c9-4256-95d4-2c1c2e584ce3.png',
      srcSet: 'https://acdn.tinkoff.ru/static/pages/files/c3ad9638-18d2-4693-a6d1-b7ec66b2677f.png 2x',
      mobile: {
        img:
          'https://acdn.tinkoff.ru/static/pages/files/3899f486-2ab3-42fb-ab52-8d0a932fce67.png 1x, https://acdn.tinkoff.ru/static/pages/files/9e59ea91-401e-488c-91f9-dac14a5332f4.png 2x',
        webp:
          'https://acdn.tinkoff.ru/static/pages/files/52eebab4-df2d-46ff-be4b-ef92b08acc51.webp 1x, https://acdn.tinkoff.ru/static/pages/files/381b7840-fa37-4f8d-8ed6-70bba2083cc0.webp 2x',
      },
      tablet: {
        webp:
          'https://acdn.tinkoff.ru/static/pages/files/45c4a50e-3376-4e46-8b4d-da62c2744c93.webp 1x, https://acdn.tinkoff.ru/static/pages/files/ed006848-e0c2-4746-b216-d3810316de01.webp 2x',
      },
      desktop: {
        img:
          'https://acdn.tinkoff.ru/static/pages/files/18f36e32-9d05-4026-8103-c04bfc8dd532.png 1x, https://acdn.tinkoff.ru/static/pages/files/74d73e13-0987-42e8-96f4-f92e276187a0.png 2x',
        webp:
          'https://acdn.tinkoff.ru/static/pages/files/013580bd-1657-44e5-9e50-8f485e704b49.webp 1x, https://acdn.tinkoff.ru/static/pages/files/ee5cee93-4c42-4602-a3b9-829108fec21b.webp 2x',
      },
    },
  },
];

export const MainAdvBlock: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const item = Math.floor(Math.random() * firstAdvBlockData.length);
  let data = firstAdvBlockData[item]; // Случайный баннер

  return <div className={classes.wrapper}>{matches ? <MobileContent {...data} /> : <DesktopContent {...data} />}</div>;
};
