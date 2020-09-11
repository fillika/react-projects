import React from 'react';

import { Container, Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core';

import { Card } from './Card';

import { TCard } from './types';

import { useStyles } from './style';

export const RecommendedProduct = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(`(max-width: ${theme.breakpoints.values.lg - 1}px)`);
  const createCards = cardsData.map((card, index) => {
    const { id } = card;

    /**
     * Проверка для того, чтобы на мобильной версии было не более 4 карточек
     */
    if (matches && index > 3) {
      return null;
    }

    return <Card {...card} key={id} />;
  });

  return (
    <div className={classes.wrapper}>
      <Container>
        <Typography variant='h2'>
          <p className={classes.subtitle}>Рекомендуемые продукты</p>
        </Typography>

        <Grid spacing={6} container>
          {createCards}
        </Grid>
      </Container>
    </div>
  );
};

const cardsData: TCard[] = [
  {
    id: 1,
    link: '/cards/debit-cards/tinkoff-black/',
    title: 'Дебетовая карта Tinkoff Black',
    subTitle: 'Кэшбэк до 30% и ежемесячный процент на остаток',
    buttonText: 'Оформить карту',
    image: {
      alt: 'Кредит наличными Тинькофф',
      src: 'https://acdn.tinkoff.ru/static/pages/files/e851d301-8b14-4602-81ee-1a99abb79e99.png',
      srcSet: 'https://acdn.tinkoff.ru/static/pages/files/e775a71d-7b3b-4192-a6e9-9419ce963924.png 2x',
      webp:
        'https://acdn.tinkoff.ru/static/pages/files/c83d87e6-a779-4e2d-9217-fc2bf84f5913.webp 1x, https://acdn.tinkoff.ru/static/pages/files/c2363516-06b4-4c49-a7f5-0f8bccc089ef.webp 2x',
      mobile: {
        img:
          'https://acdn.tinkoff.ru/static/pages/files/3e57b64d-9b4a-4032-8555-9bd11d308b75.png 1x, https://acdn.tinkoff.ru/static/pages/files/1bdde9e3-8f16-4387-8611-51459fce0948.png 2x',
        webp:
          'https://acdn.tinkoff.ru/static/pages/files/eebfed43-7bbb-4b98-9741-1641c08b72bd.webp 1x, https://acdn.tinkoff.ru/static/pages/files/9ab6a652-c12c-4ad3-93d6-0a678dd35704.webp 2x',
      },
    },
  },
  {
    id: 2,
    link: '/invest/#form-application',
    title: 'Инвестиции',
    subTitle: 'Советы по выбору акций и удобное приложение',
    buttonText: 'Стать инвестором',
    image: {
      alt: 'Тинькофф Инвестиции',
      src: 'https://acdn.tinkoff.ru/static/pages/files/99c0b4ed-bffc-4c94-a0af-bda8f69b60fb.png',
      srcSet: 'https://acdn.tinkoff.ru/static/pages/files/c7cfd2d1-9328-443b-a459-3b298d99928c.png 2x',
      webp:
        'https://acdn.tinkoff.ru/static/pages/files/d4c8b2d2-8d2d-490e-99f0-7801f29e9775.webp 1x, https://acdn.tinkoff.ru/static/pages/files/768fb556-9e67-4c7b-a1af-cf7c5c93f613.webp 2x',
      mobile: {
        img:
          'https://acdn.tinkoff.ru/static/pages/files/6a23cbd7-9047-403a-a18f-3054f6fa86ba.png 1x, https://acdn.tinkoff.ru/static/pages/files/66aa6830-f300-40ab-aece-ccc4f322d27d.png 2x',
        webp:
          'https://acdn.tinkoff.ru/static/pages/files/7ed92f31-426a-4539-9d79-cfefb62681f6.webp 1x, https://acdn.tinkoff.ru/static/pages/files/04308679-5548-4262-b4b5-34c459dfd4c5.webp 2x',
      },
    },
  },
  {
    id: 3,
    link: '/cards/credit-cards/tinkoff-platinum/',
    title: 'Тинькофф Платинум',
    subTitle: 'Кредитный лимит до 700 000 ₽. Без процентов до года',
    buttonText: 'Оформить карту',
    image: {
      alt: 'Тинькофф Платинум',
      src: 'https://acdn.tinkoff.ru/static/pages/files/8d3123c3-8de4-475c-84ac-1a2688181526.png',
      srcSet: 'https://acdn.tinkoff.ru/static/pages/files/bb37a133-ad5e-4925-a653-d199240eb085.png 2x',
      webp:
        'https://acdn.tinkoff.ru/static/pages/files/2860c187-78c2-4201-b652-8a9b4b6de08d.webp 1x, https://acdn.tinkoff.ru/static/pages/files/c103381c-1001-4a07-825e-8ac8afa5ed9f.webp 2x',
      mobile: {
        img:
          'https://acdn.tinkoff.ru/static/pages/files/cec07050-18ce-45ed-b4de-b161141ff4b4.png 1x, https://acdn.tinkoff.ru/static/pages/files/8126b1ca-4cb2-4f37-b736-cdecc7b5c965.png 2x',
        webp:
          'https://acdn.tinkoff.ru/static/pages/files/3b3d9b5e-c273-472d-bb6b-b5191c960f6f.webp 1x, https://acdn.tinkoff.ru/static/pages/files/a4971a95-f189-43dc-b78c-0856268940eb.webp 2x',
      },
    },
  },
  {
    id: 4,
    link: '/mobile-operator/',
    title: 'Тинькофф Мобайл',
    subTitle: 'Попробуйте бесплатно: голосовой помощник, 600 минут, 20 ГБ',
    buttonText: 'Заказать сим-карту',
    image: {
      alt: 'Тинькофф Мобайл',
      src: 'https://acdn.tinkoff.ru/static/pages/files/9a4d1571-fe8c-4ec2-a273-3545983f1f13.png',
      srcSet: 'https://acdn.tinkoff.ru/static/pages/files/e4796e70-b5ad-4661-812d-6c1a2b89f301.png 2x',
      webp:
        'https://acdn.tinkoff.ru/static/pages/files/d215d3c4-3b10-4a14-b277-73f17db83b6c.webp 1x, https://acdn.tinkoff.ru/static/pages/files/c28c94f4-9184-4e62-9116-786a58d0d035.webp 2x',
      mobile: {
        img:
          'https://acdn.tinkoff.ru/static/pages/files/2161a57a-d45d-4d51-964f-b0c336c0ef91.png 1x, https://acdn.tinkoff.ru/static/pages/files/ba25cae7-d7ff-47ce-93a4-334edba55d05.png 2x',
        webp:
          'https://acdn.tinkoff.ru/static/pages/files/8ac8f450-99f2-4331-8e1c-8809dc6d9123.webp 1x, https://acdn.tinkoff.ru/static/pages/files/b75c6cf8-16e4-43a1-bc5a-e964b52ae8ef.webp 2x',
      },
    },
  },
  {
    id: 5,
    link: '/business/account/',
    title: 'Счет для бизнеса',
    subTitle: 'До 4% на остаток и до 4 месяцев бесплатно. Всё онлайн',
    buttonText: 'Открыть счет',
    image: {
      alt: 'Тинькофф Бизнес',
      src: 'https://acdn.tinkoff.ru/static/pages/files/c3500acc-bf3b-48d4-a3f3-88f612f4c18d.png',
      srcSet: 'https://acdn.tinkoff.ru/static/pages/files/8aebf31b-c53d-4325-aa3d-b32044ab6572.png 2x',
      webp:
        'https://acdn.tinkoff.ru/static/pages/files/536cb789-3d0a-4c71-99c6-349d3b630191.webp 1x, https://acdn.tinkoff.ru/static/pages/files/99381868-5a0e-41f9-b5b7-e678f479ada3.webp 2x',
      mobile: {
        img:
          'https://acdn.tinkoff.ru/static/pages/files/3886758f-24f9-4d21-a03d-2400c6db09d1.png 1x, https://acdn.tinkoff.ru/static/pages/files/0120a138-8720-4650-847a-5dd47b65dbf3.png 2x',
        webp:
          'https://acdn.tinkoff.ru/static/pages/files/ab575cec-c660-4e83-b699-1205b6611b05.webp 1x, https://acdn.tinkoff.ru/static/pages/files/a552e2ae-40e6-4233-a9a5-f059763c084a.webp 2x',
      },
    },
  },
  {
    id: 6,
    link: '/cards/debit-cards/tinkoff-black/junior/',
    title: 'Бесплатная детская карта',
    subTitle: 'Бонусы за покупки. Возврат денег за оплату в кафе и интернете',
    buttonText: 'Оформить карту',
    image: {
      alt: 'Тинькофф Джуниор',
      src: 'https://acdn.tinkoff.ru/static/pages/files/b0613bf2-a946-46a1-89fa-755e64626109.png',
      srcSet: 'https://acdn.tinkoff.ru/static/pages/files/e4ed5849-ae7c-4530-a48c-de82a9ee8998.png 2x',
      webp:
        'https://acdn.tinkoff.ru/static/pages/files/43920e66-a057-479d-bbd1-500dcd644614.webp 1x, https://acdn.tinkoff.ru/static/pages/files/035a0300-7c57-44a4-bb73-159d51df8581.webp 2x',
      mobile: {
        img:
          'https://acdn.tinkoff.ru/static/pages/files/74954be6-3fc4-440c-8779-fb13c3a1975a.png 1x, https://acdn.tinkoff.ru/static/pages/files/ac2db0e6-1b20-4cd2-99fb-2585eca47a25.png 2x',
        webp:
          'https://acdn.tinkoff.ru/static/pages/files/160cca85-77db-4f61-b2b1-d3585ba53954.webp 1x, https://acdn.tinkoff.ru/static/pages/files/69ed1f9b-99f7-4acd-b39b-5f069fe4fbfc.webp 2x',
      },
    },
  },
];
