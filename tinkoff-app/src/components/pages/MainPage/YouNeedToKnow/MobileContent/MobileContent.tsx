import React from "react";
import { Card } from '../../../../Common/Card';
import { Button, Container } from "@material-ui/core";
import { useStyles } from "./style";
import { TCard } from "../../../../Common/Card/types";

export const MobileContent: React.FC = () => {
  const classes = useStyles();
  const render = mobileData.map(data => <SmallCard { ...data } key={ data.id }/>);

  const cardData: TCard = {
    id: 1,
    link: 'https://karantin.project.tinkoff.ru/?internal_source=home#entertainment',
    title: 'Чем себя занять на карантине?',
    subTitle: 'Собрали все самое важное и&nbsp;полезное, чтобы&nbsp;помочь вам во&nbsp;время карантина и&nbsp;после&nbsp;него',
    buttonText: 'Провести время с пользой',
    isLink: false,
    image: {
      alt: 'Чем себя занять на карантине',
      src: 'https://acdn.tinkoff.ru/static/pages/files/08c98d66-1743-4526-9768-f360bd4d8c49.png',
      srcSet: '',
      webp: '',
      mobile: {
        img: 'https://acdn.tinkoff.ru/static/pages/files/08c98d66-1743-4526-9768-f360bd4d8c49.png 1x, https://acdn.tinkoff.ru/static/pages/files/427e1bac-4b51-4177-ab3b-b51549028f26.png 2x',
        webp: 'https://acdn.tinkoff.ru/static/pages/files/62f12055-d9c0-4908-b207-c9dae1032e3a.webp 1x, https://acdn.tinkoff.ru/static/pages/files/ab6e297c-f6f7-4e62-b153-1df8f90f316c.webp 2x',
      },
    }
  };

  return (
    <>
      <Container style={ { paddingBottom: '24px' } }>
        <Card { ...cardData } />
      </Container>

      <div className={ classes.wrapper }>
        <Container>
          <div className={ classes.container }>
            { render }
          </div>
        </Container>
      </div>
    </>
  );
};

const SmallCard: React.FC<TmobileData> = props => {
  const { title, image: { src, srcSet, webp }, link: { href, text } } = props;
  const classes = useStyles();

  return (
    <div className={ classes.cardWrapper }>
      <div>
        <picture>
          <source srcSet={ webp } type='image/webp'/>
          <img loading='lazy' src={ src } srcSet={ srcSet } alt={ title }/>
        </picture>
      </div>

      <p className={ classes.cardTitle } dangerouslySetInnerHTML={ { __html: title } }/>

      <div className={ classes.buttonWrapper }>
        <Button className={ classes.cardButton } variant='outlined'>
          <a className={ classes.cardLink } rel='noopener noreferrer' target='_blank' href={ href }>{ text }</a>
        </Button>
      </div>
    </div>
  );
};

const mobileData: TmobileData[] = [
  {
    id: 1,
    title: 'Что вам должны при&nbsp;потере работы и&nbsp;дохода',
    link: {
      href: 'https://journal.tinkoff.ru/esli-net-raboty/?internal_source=home',
      text: 'Узнать больше'
    },
    image: {
      src: 'https://acdn.tinkoff.ru/static/pages/files/84e5970e-4967-4f2c-8df0-867ca4c43c76.png',
      srcSet: 'https://acdn.tinkoff.ru/static/pages/files/8057b115-dc5d-4722-91e5-1ae93f2428f9.png 2x',
      webp: 'https://acdn.tinkoff.ru/static/pages/files/80b747bb-abe1-4a68-9993-caeb4af3b91d.webp 1x, https://acdn.tinkoff.ru/static/pages/files/e28c2301-9902-486e-8a1a-e26959263829.webp 2x',
    }
  },
  {
    id: 2,
    title: 'Кредитные каникулы: кто и&nbsp;как может получить',
    link: {
      href: 'https://journal.tinkoff.ru/news/kreditnye-kanikuly-fl/?internal_source=home',
      text: 'Читать'
    },
    image: {
      src: 'https://acdn.tinkoff.ru/static/pages/files/6ec127d7-83b8-45b8-97ea-e22066c4899a.png',
      srcSet: 'https://acdn.tinkoff.ru/static/pages/files/c03c283f-478d-4399-ac18-587bae91e39a.png 2x',
      webp: 'https://acdn.tinkoff.ru/static/pages/files/57217aed-df85-46c9-a437-08babc6554b4.webp 1x, https://acdn.tinkoff.ru/static/pages/files/ea68dda1-27d3-4a30-9581-0b635ffac7d3.webp 2x',
    }
  },
  {
    id: 3,
    title: 'Как получить повышенные пособия из-за коронавируса',
    link: {
      href: 'https://journal.tinkoff.ru/news/shtraf-koronavirus/?internal_source=home',
      text: 'Читать'
    },
    image: {
      src: 'https://acdn.tinkoff.ru/static/pages/files/da3c98cc-c2e1-4156-a72f-743280c49404.png',
      srcSet: 'https://acdn.tinkoff.ru/static/pages/files/d90febc1-10a8-4b85-8428-ccd575615cc7.png 2x',
      webp: 'https://acdn.tinkoff.ru/static/pages/files/5a20d3f1-bcf6-4195-94af-a438926c0d15.webp 1x, https://acdn.tinkoff.ru/static/pages/files/519655f8-6e8c-4cb5-b4ce-2971279a8d17.webp 2x',
    }
  },
  {
    id: 4,
    title: 'Новые штрафы и&nbsp;сроки из-за коронавируса: кого и&nbsp;за&nbsp;что могут наказать',
    link: {
      href: 'https://journal.tinkoff.ru/guide/posobie-koronavirus/?internal_source=home',
      text: 'Узнать больше'
    },
    image: {
      src: 'https://acdn.tinkoff.ru/static/pages/files/3c274d9d-ce3d-489c-97c4-408217352790.png',
      srcSet: 'https://acdn.tinkoff.ru/static/pages/files/e9b74a5d-54d7-47ce-a4a0-ad2155e4a797.png 2x',
      webp: 'https://acdn.tinkoff.ru/static/pages/files/1b49825e-f8f1-4acf-8f96-3a591fe3fc68.webp 1x, https://acdn.tinkoff.ru/static/pages/files/20b1038a-4fa2-497a-9976-295195e284cb.webp 2x',
    }
  },
  {
    id: 5,
    title: 'Новые штрафы и&nbsp;сроки из-за коронавируса: кого и&nbsp;за&nbsp;что могут наказать',
    link: {
      href: 'https://journal.tinkoff.ru/news/obey-and-pay/',
      text: 'Читать'
    },
    image: {
      src: 'https://acdn.tinkoff.ru/static/pages/files/3b9ac4e0-c2ae-477f-a454-f8cbd3e66a28.png',
      srcSet: 'https://acdn.tinkoff.ru/static/pages/files/5c3bdd2d-c1ef-4be0-9da3-64a13c6794f6.png 2x',
      webp: 'https://acdn.tinkoff.ru/static/pages/files/ca0cb207-50e0-4020-ab25-8e14c0e4ad58.webp 1x, https://acdn.tinkoff.ru/static/pages/files/90c2141e-46d0-4889-9801-34f41b0f2f67.webp 2x',
    }
  },
];

type TmobileData = {
  id: number;
  title: string;
  link: {
    href: string;
    text: string;
  };
  image: {
    src: string;
    srcSet: string;
    webp: string;
  },
}