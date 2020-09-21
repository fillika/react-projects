import React from "react";
import { Button } from "@material-ui/core";

export const MobileContent: React.FC = () => {
  const render = mobileData.map( data => <Card { ...data } key={ data.id }/> )

  return (
    <>
      { render }
    </>
  )
}

const Card: React.FC<mobileData> = props => {
  const { title, image: { src, srcSet, webp }, link: { href, text } } = props;

  return (
    <div>
      <div>
        <picture>
          <source
            srcSet={ webp } type='image/webp'/>
          <img
            loading='lazy' src={ src } srcSet={ srcSet } alt={ title }/>
        </picture>
      </div>

      <div>
        <p dangerouslySetInnerHTML={ { __html: title } }/>
      </div>

      <div>
        <Button variant='outlined'>
          <a target='_blank' href={ href }>{ text }</a>
        </Button>
      </div>
    </div>
  )
}

const mobileData: mobileData[] = [
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
]

type mobileData = {
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
  }
}