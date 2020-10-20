import { IData } from "../common/CardTemplate/types";

export const mainCard: IData = {
  cardType: 'debit',
  isMain: true,
  cardTitle: 'Наша лучшая дебетовая карта',
  cardLink: '/cards/debit-cards/tinkoff-black/',
  desktop: {
    img: {
      alt: 'Дебетовая карта',
      min1360webp: 'https://acdn.tinkoff.ru/static/pages/files/50864c95-1c55-4eb3-baa6-1411a3455bb9.webp 1x, https://acdn.tinkoff.ru/static/pages/files/31d61e63-266d-4ec3-92eb-dd594a5b8e92.webp 2x',
      min1360: 'https://acdn.tinkoff.ru/static/pages/files/6d680933-9328-49fe-9921-aecf865b8462.png 1x, https://acdn.tinkoff.ru/static/pages/files/ba0b2256-43c5-417a-b3bb-132ecfef975b.png 2x',
      max1360webp: 'https://acdn.tinkoff.ru/static/pages/files/70f914b0-3271-4bc3-9e12-82df165df936.webp 1x, https://acdn.tinkoff.ru/static/pages/files/f1523791-e63a-4630-930e-90769fbc28f4.webp 2x',
      src: 'https://acdn.tinkoff.ru/static/pages/files/d337c954-7aa1-4d30-ab3d-009872b4b1c0.png',
      srcSet: 'https://acdn.tinkoff.ru/static/pages/files/b41602d8-4655-4468-9e83-483a4184a9bc.png 2x',
    },
    title: 'Дебетовая карта Tinkoff&nbsp;Black',
    about: 'Правильная дебетовая карта, которая зарабатывает деньги.<br>Получайте кэшбэк и процент на остаток, снимайте наличные бесплатно',
    list: [
      {
        itemTitle: 'До 30% кэшбэк',
        itemSubtitle: 'Рублями за покупки'
      },
      {
        itemTitle: 'До 10% годовых',
        itemSubtitle: 'На остаток до конца года'
      },
      {
        itemTitle: 'От 0 ₽ в месяц',
        itemSubtitle: 'Стоимость обслуживания'
      },
    ],
    formButton: {
      href: '/cards/debit-cards/tinkoff-black/#form',
      text: 'Оформить карту'
    },
    learnMoreButton: {
      href: '/cards/debit-cards/tinkoff-black/',
      text: 'Подробнее о карте'
    },
  },
  mobile: {
    img: {
      webp: 'https://acdn.tinkoff.ru/static/pages/files/94871ef7-db90-4345-88b2-fd84d2e7a340.webp 1x, https://acdn.tinkoff.ru/static/pages/files/b74e4f71-69f2-4f1c-9586-213ff26c3844.webp 2x',
      src: 'https://acdn.tinkoff.ru/static/pages/files/54ec98a9-f62f-4dbb-8457-6e005a803abb.png',
      srcSet: 'https://acdn.tinkoff.ru/static/pages/files/1be01694-1b21-4b4c-97c8-36cbb7806e2b.png 2x',
      alt: 'Дебетовая карта',
    },
    title: 'Дебетовая карта Tinkoff&nbsp;Black',
    about: 'Правильная дебетовая карта, которая зарабатывает деньги',
    list: [
      '<strong>До&nbsp;30% кэшбэка </strong>рублями за&nbsp;покупки',
      '<strong>До&nbsp;10% годовых </strong>на&nbsp;остаток до&nbsp;конца&nbsp;года',
      '<strong>От&nbsp;0&nbsp;₽ </strong>за обслуживание&nbsp;карты',
    ],
    formButton: {
      href: '/cards/debit-cards/tinkoff-black/#form',
      text: 'Оформить карту'
    },
    learnMoreButton: {
      href: '/cards/debit-cards/tinkoff-black/',
      text: 'Подробнее'
    },
  }
};

export const secondCard: IData[] = [
  {
    cardType: 'debit',
    isMain: false,
    cardTitle: 'Для детей и подростков',
    cardLink: '/cards/debit-cards/tinkoff-black/junior/',
    desktop: {
      img: {
        alt: 'Детская карта Tinkoff Junior',
        min1360webp: 'https://acdn.tinkoff.ru/static/pages/files/294b7bf6-a1d7-4f04-a7e5-c2c353d9d191.webp 1x, https://acdn.tinkoff.ru/static/pages/files/02b5f5a5-f59d-4a63-914a-7087fef3e26b.webp 2x',
        min1360: 'https://acdn.tinkoff.ru/static/pages/files/13ffe03f-6aaf-4df2-a3c3-042c3fe446ae.png 1x, https://acdn.tinkoff.ru/static/pages/files/b957a172-b6df-4939-9b24-19d75343d620.png 2x',
        max1360webp: 'https://acdn.tinkoff.ru/static/pages/files/1d5e0381-e4d6-4e58-aec3-c4bfb38a7cb4.webp 1x, https://acdn.tinkoff.ru/static/pages/files/b031ee02-ea5b-4a92-998e-dadc034c0bbf.webp 2x',
        src: 'https://acdn.tinkoff.ru/static/pages/files/b77c75b5-ea59-4e30-bf8d-aa601736aa83.png',
        srcSet: 'https://acdn.tinkoff.ru/static/pages/files/222283f4-4553-47de-8bfa-fdbf040a5b80.png 2x',
      },
      title: 'Детская карта Tinkoff&nbsp;Junior',
      about: 'Дебетовая карта для&nbsp;детей до&nbsp;14&nbsp;лет. Детям&nbsp;— бонусы и&nbsp;приложение с&nbsp;крутым дизайном. Родителям&nbsp;— помощь в&nbsp;воспитании финансово&nbsp;грамотного ребенка',
      list: [
        {
          itemTitle: '2% кэшбэк',
          itemSubtitle: 'Бонусами за покупки в интернете'
        },
        {
          itemTitle: '1% кэшбэк',
          itemSubtitle: 'Бонусами за другие покупки'
        },
        {
          itemTitle: '0 ₽ в месяц',
          itemSubtitle: 'Стоимость обслуживания'
        },
      ],
      formButton: {
        href: '/cards/debit-cards/tinkoff-black/junior/#form',
        text: 'Оформить карту'
      },
      learnMoreButton: {
        href: '/cards/debit-cards/tinkoff-black/junior/',
        text: 'Подробнее о карте'
      },
    },
    mobile: {
      img: {
        webp: 'https://acdn.tinkoff.ru/static/pages/files/c5e46530-00aa-45cf-8661-6dc634362827.webp 1x, https://acdn.tinkoff.ru/static/pages/files/e07c5986-3e33-4f02-bf22-1d075a23c279.webp 2x',
        src: 'https://acdn.tinkoff.ru/static/pages/files/be7968da-254e-4c07-8f4d-05f31388d423.png',
        srcSet: 'https://acdn.tinkoff.ru/static/pages/files/1153aaa5-6aff-4c24-b85c-a3fc9230284a.png 2x',
        alt: 'Детская карта Tinkoff Junior',
      },
      title: 'Детская карта Tinkoff&nbsp;Junior',
      about: 'Дебетовая карта для детей до 14 лет&nbsp;',
      list: [
        '<strong>2%&nbsp;кэшбэка</strong></span> за&nbsp;покупки в&nbsp;интернете',
        '<strong>1%&nbsp;кэшбэка</strong></span> за&nbsp;другие покупки',
        '<strong>0&nbsp;₽</strong></span> за обслуживание карты',
      ],
      formButton: {
        href: '/cards/debit-cards/tinkoff-black/junior/#form',
        text: 'Оформить карту'
      },
      learnMoreButton: {
        href: '/cards/debit-cards/tinkoff-black/junior/',
        text: 'Подробнее'
      },
    }
  },
  {
    cardType: 'debit',
    isMain: false,
    cardTitle: 'Для путешествий',
    cardLink: '/cards/debit-cards/all-airlines/',
    desktop: {
      img: {
        alt: 'Дебетовая карта ALL Airlines',
        min1360webp: 'https://acdn.tinkoff.ru/static/pages/files/1240cd78-2658-4adf-9b2a-bcce9e421e1a.webp 1x, https://acdn.tinkoff.ru/static/pages/files/a62796fb-bd95-4e23-8ce2-24a19197a589.webp 2x',
        min1360: 'https://acdn.tinkoff.ru/static/pages/files/951db66e-4ff5-450d-82e6-6be2482f47a8.png 1x, https://acdn.tinkoff.ru/static/pages/files/46d61424-66d2-48fb-b35d-dfe094aead2d.png 2x',
        max1360webp: 'https://acdn.tinkoff.ru/static/pages/files/c087742f-64c9-41c8-9598-7368769b174d.webp 1x, https://acdn.tinkoff.ru/static/pages/files/aaabd16f-c949-4151-9310-e0d5cfadb743.webp 2x',
        src: 'https://acdn.tinkoff.ru/static/pages/files/e239782f-6355-4195-8de7-3ae8198de40f.png',
        srcSet: 'https://acdn.tinkoff.ru/static/pages/files/e478e74b-9c3c-4de9-9e6a-10b5f63ed69f.png 2x',
      },
      title: 'Дебетовая карта ALL&nbsp;Airlines',
      about: 'Карта для&nbsp;путешествий с&nbsp;любыми авиакомпаниями. Оплачивайте&nbsp;милями 100% цены авиабилета&nbsp;— на&nbsp;любой рейс, направление и&nbsp;дату',
      list: [
        {
          itemTitle: 'До 10% кэшбэк',
          itemSubtitle: 'Милями за покупки на travel.tinkoff.ru'
        },
        {
          itemTitle: 'До 3,5% годовых',
          itemSubtitle: 'Милями на остаток по счету'
        },
        {
          itemTitle: 'От 0 ₽ в месяц',
          itemSubtitle: 'Стоимость обслуживания'
        },
      ],
      formButton: {
        href: '/cards/debit-cards/all-airlines/#form',
        text: 'Оформить карту'
      },
      learnMoreButton: {
        href: '/cards/debit-cards/all-airlines/',
        text: 'Подробнее о карте'
      },
    },
    mobile: {
      img: {
        webp: 'https://acdn.tinkoff.ru/static/pages/files/9a7d8974-710e-4f8d-9883-c33334ef3f9f.webp 1x, https://acdn.tinkoff.ru/static/pages/files/4de0a980-1786-471e-a984-71a0284fe5da.webp 2x',
        src: 'https://acdn.tinkoff.ru/static/pages/files/57274c25-dcff-4ebe-a136-cde8d6594b88.png',
        srcSet: 'https://acdn.tinkoff.ru/static/pages/files/f590b3db-7a5d-43d8-812d-8929ff05ced4.png 2x',
        alt: 'Дебетовая карта ALL Airlines',
      },
      title: 'Дебетовая карта ALL&nbsp;Airlines',
      about: 'Карта для путешествий с&nbsp;любыми авиакомпаниями&nbsp;',
      list: [
        '<strong>До&nbsp;10% кэшбэка</strong></span>&nbsp;милями за&nbsp;траты на&nbsp;путешествия',
        '<strong>До&nbsp;3,5% годовых</strong></span> на&nbsp;остаток по&nbsp;счету',
        '<strong>От&nbsp;0&nbsp;₽</strong></span> за&nbsp;обслуживание карты',
      ],
      formButton: {
        href: '/cards/debit-cards/all-airlines/#form',
        text: 'Оформить карту'
      },
      learnMoreButton: {
        href: '/cards/debit-cards/all-airlines/',
        text: 'Подробнее'
      },
    }
  },
  {
    cardType: 'debit',
    isMain: false,
    cardTitle: 'Для автомобилистов',
    cardLink: '/cards/debit-cards/drive/',
    desktop: {
      img: {
        alt: 'Дебетовая карта Tinkoff Drive',
        min1360webp: 'https://acdn.tinkoff.ru/static/pages/files/3311baf2-7474-488f-beb4-3e00b3593e36.webp 1x, https://acdn.tinkoff.ru/static/pages/files/27070be9-26a8-41c8-959f-534699711944.webp 2x',
        min1360: 'https://acdn.tinkoff.ru/static/pages/files/bda80b94-2942-4aae-b67b-e5c091bce6e8.png 1x, https://acdn.tinkoff.ru/static/pages/files/18912209-cc1f-4839-af6e-e9b5f1aa01eb.png 2x',
        max1360webp: 'https://acdn.tinkoff.ru/static/pages/files/e0133d64-bb12-46d7-8a9d-09e1115bdb6a.webp 1x, https://acdn.tinkoff.ru/static/pages/files/ade408dc-0db3-46d6-9376-acd097ec1896.webp 2x',
        src: 'https://acdn.tinkoff.ru/static/pages/files/d4c70b96-0e6e-4889-93be-53da49137240.png',
        srcSet: 'https://acdn.tinkoff.ru/static/pages/files/a7095cc2-824c-4d10-b192-0e00137f83db.png 2x',
      },
      title: 'Дебетовая карта Tinkoff&nbsp;Drive',
      about: 'Дебетовая карта для&nbsp;всех, кто за&nbsp;рулем. Получайте баллы за&nbsp;любые&nbsp;покупки и&nbsp;оплачивайте ими парковку, запчасти, ремонт&nbsp;машины',
      list: [
        {
          itemTitle: 'До 10% кэшбэк',
          itemSubtitle: 'Бонусами за покупки на АЗС'
        },
        {
          itemTitle: '5% кэшбэк',
          itemSubtitle: 'Бонусами за автоуслуги'
        },
        {
          itemTitle: 'От 0 ₽ в месяц',
          itemSubtitle: 'Стоимость обслуживания'
        },
      ],
      formButton: {
        href: '/cards/debit-cards/drive/#form',
        text: 'Оформить карту'
      },
      learnMoreButton: {
        href: '/cards/debit-cards/drive/',
        text: 'Подробнее о карте'
      },
    },
    mobile: {
      img: {
        webp: 'https://acdn.tinkoff.ru/static/pages/files/df655c55-800f-4f23-9a16-b34d30044e02.webp 1x, https://acdn.tinkoff.ru/static/pages/files/3974d65a-ec0d-4ea8-a87c-c716b94c39b5.webp 2x',
        src: 'https://acdn.tinkoff.ru/static/pages/files/2581fccf-3d50-4480-a748-59039bae009f.png',
        srcSet: 'https://acdn.tinkoff.ru/static/pages/files/c7fbabd1-2120-44b3-a514-2a9fc963abd8.png 2x',
        alt: 'Дебетовая карта Tinkoff Drive',
      },
      title: 'Дебетовая карта Tinkoff&nbsp;Drive',
      about: 'Дебетовая карта для всех, кто за&nbsp;рулем',
      list: [
        '<strong>10% кэшбэка</strong></span> за&nbsp;покупки на&nbsp;АЗС',
        '<strong>5% кэшбэка </strong>з</span>а&nbsp;автоуслуги',
        '<strong>От&nbsp;0&nbsp;₽</strong></span> за обслуживание карты',
      ],
      formButton: {
        href: '/cards/debit-cards/drive/#form',
        text: 'Оформить карту'
      },
      learnMoreButton: {
        href: '/cards/debit-cards/drive/',
        text: 'Подробнее'
      },
    }
  },
];
