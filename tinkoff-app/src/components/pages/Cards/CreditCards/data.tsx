import { IData } from "../common/CardTemplate/types";

export const mainCard: IData = {
  isMain: true,
  cardTitle: 'Наша лучшая кредитная карта',
  cardLink: '/cards/credit-cards/tinkoff-platinum/#form',
  desktop: {
    img: {
      alt: 'Кредитная карта',
      min1360webp: 'https://acdn.tinkoff.ru/static/pages/files/2f768141-e854-4913-a8d1-dbc3a62aedae.png 1x, https://acdn.tinkoff.ru/static/pages/files/23bba29f-bdc3-44df-994a-9e9b07993ff8.png 2x',
      min1360: 'https://acdn.tinkoff.ru/static/pages/files/0c9ab3d5-8e35-4223-a8fe-16c4c981b352.webp 1x, https://acdn.tinkoff.ru/static/pages/files/bf1ca0d5-b9ee-47cd-bb7d-0e236ba55721.webp 2x',
      max1360webp: 'https://acdn.tinkoff.ru/static/pages/files/3569ea9b-a916-4aeb-902c-bc849f017aa2.webp 1x, https://acdn.tinkoff.ru/static/pages/files/25c8968b-96a0-4504-8c8c-8dae4c0638bf.webp 2x',
      src: 'https://acdn.tinkoff.ru/static/pages/files/a753ed8e-6d89-4730-8eb2-997c5edf7c24.png',
      srcSet: 'https://acdn.tinkoff.ru/static/pages/files/3e0c26f7-e20c-44e4-b913-6019b2b194c6.png 2x',
    },
    title: 'Кредитная карта Тинькофф Платинум',
    about: 'Наша лучшая кредитная карта. Подходит для повседневных трат и&nbsp;покупок в&nbsp;рассрочку. Одобрим&nbsp;за&nbsp;2&nbsp;минуты, доставим бесплатно',
    list: [
      {
        itemTitle: 'До 700 000 ₽',
        itemSubtitle: 'Кредитный лимит'
      },
      {
        itemTitle: '0% до 12 мес.',
        itemSubtitle: 'Рассрочка у партнеров'
      },
      {
        itemTitle: '590 ₽ в год',
        itemSubtitle: 'Стоимость обслуживания'
      },
    ],
    formButton: {
      href: '/cards/credit-cards/tinkoff-platinum/#form',
      text: 'Оформить карту'
    },
    learnMoreButton: {
      href: '/cards/credit-cards/tinkoff-platinum/',
      text: 'Подробнее о карте'
    },
  },
  mobile: {
    img: {
      webp: 'https://acdn.tinkoff.ru/static/pages/files/47444801-cde9-4361-a492-5eee734aaeb6.webp 1x, https://acdn.tinkoff.ru/static/pages/files/5b55d07c-d3d4-4cd8-95f6-f842dba4bb2c.webp 2x',
      src: 'https://acdn.tinkoff.ru/static/pages/files/ab43fcbc-2591-4638-bba5-fed6882cadcb.png',
      srcSet: 'https://acdn.tinkoff.ru/static/pages/files/c79b810f-ba04-4011-8896-24bf0a41b9d6.png 2x',
      alt: 'Кредитная карта',
    },
    title: 'Кредитная карта Тинькофф&nbsp;Платинум',
    about: 'Подходит для повседневных трат и покупок в рассрочку',
    list: [
      '<strong>До&nbsp;700&nbsp;000&nbsp;₽</strong>&nbsp;&mdash; кредитный лимит',
      '<strong>0%&nbsp;рассрочка</strong> до&nbsp;года у&nbsp;партнеров',
      '<strong>590&nbsp;₽ в&nbsp;год</strong> за&nbsp;обслуживание карты',
    ],
    formButton: {
      href: '/cards/credit-cards/tinkoff-platinum/#form',
      text: 'Оформить карту'
    },
    learnMoreButton: {
      href: '/cards/credit-cards/tinkoff-platinum/',
      text: 'Подробнее'
    },
  }
};

export const secondCard: IData[] = [
  {
    isMain: false,
    cardTitle: 'Для путешествий',
    cardLink: '/cards/credit-cards/all-airlines/#form',
    desktop: {
      img: {
        alt: 'Кредитная карта ALL Airlines',
        min1360webp: 'https://acdn.tinkoff.ru/static/pages/files/fe5ce927-c87c-404a-8b37-0c0b0a7f560f.webp 1x, https://acdn.tinkoff.ru/static/pages/files/fdda9188-ceb5-4104-8099-1b43b8f5e4e7.webp 2x',
        min1360: 'https://acdn.tinkoff.ru/static/pages/files/b112f25c-5d41-455b-9924-f0d1f1f8b6c9.png 1x, https://acdn.tinkoff.ru/static/pages/files/731979f2-b542-485b-8132-78686c6f639b.png 2x',
        max1360webp: 'https://acdn.tinkoff.ru/static/pages/files/12d08bd2-7e22-4154-a0b5-23cd1b24c8ef.webp 1x, https://acdn.tinkoff.ru/static/pages/files/5cba2f44-6f5e-4d01-92ba-17203b6ae713.webp 2x',
        src: 'https://acdn.tinkoff.ru/static/pages/files/cc0fcf60-e26b-4931-9f15-8e05db631ddf.png',
        srcSet: 'https://acdn.tinkoff.ru/static/pages/files/d0961765-0165-491d-9fff-853515822912.png 2x',
      },
      title: 'Кредитная карта ALL&nbsp;Airlines',
      about: 'Карта для путешествий с&nbsp;любыми авиакомпаниями. Оплачивайте&nbsp;милями 100% цены авиабилета&nbsp;— на&nbsp;любой рейс, направление и&nbsp;дату',
      list: [
        {
          itemTitle: 'До 700 000 ₽',
          itemSubtitle: 'Кредитный лимит'
        },
        {
          itemTitle: 'До 10% кэшбэк',
          itemSubtitle: 'За траты на путешествия'
        },
        {
          itemTitle: '1 890 ₽ в год',
          itemSubtitle: 'Стоимость обслуживания'
        },
      ],
      formButton: {
        href: '/cards/credit-cards/all-airlines/#form',
        text: 'Оформить карту'
      },
      learnMoreButton: {
        href: '/cards/credit-cards/all-airlines/',
        text: 'Подробнее о карте'
      },
    },
    mobile: {
      img: {
        webp: 'https://acdn.tinkoff.ru/static/pages/files/de12dc27-32d2-4798-9175-98e804f7fb72.webp 1x, https://acdn.tinkoff.ru/static/pages/files/1c9b3c6c-9ba9-4e58-a719-a0195f1561d1.webp 2x',
        src: 'https://acdn.tinkoff.ru/static/pages/files/92e7f9d0-ff56-4996-a3ac-155c1fc4d3ac.png',
        srcSet: 'https://acdn.tinkoff.ru/static/pages/files/ff6fe91a-f01d-4738-88bb-cf3ce77db3da.png 2x',
        alt: 'Кредитная карта ALL Airlines',
      },
      title: 'Кредитная карта ALL&nbsp;Airlines',
      about: 'Карта для&nbsp;путешествий с&nbsp;любыми авиакомпаниями',
      list: [
        '<strong>До&nbsp;700&nbsp;000&nbsp;₽</strong>&nbsp;&mdash; кредитный лимит',
        '<strong>До 10%&nbsp;кэшбека</strong> за траты на путешествия',
        '<strong>1 890&nbsp;₽ в&nbsp;год</strong> за&nbsp;обслуживание карты',
      ],
      formButton: {
        href: '/cards/credit-cards/all-airlines/#form',
        text: 'Оформить карту'
      },
      learnMoreButton: {
        href: '/cards/credit-cards/all-airlines/',
        text: 'Подробнее'
      },
    }
  },
  {
    isMain: false,
    cardTitle: 'Для путешествий',
    cardLink: '/cards/credit-cards/all-airlines/black-edition/#form',
    desktop: {
      img: {
        alt: 'Кредитная карта ALL Airlines Black Edition',
        min1360webp: 'https://acdn.tinkoff.ru/static/pages/files/3841eb9c-911c-4430-bad4-e1b2f21ddfe1.webp 1x, https://acdn.tinkoff.ru/static/pages/files/e70a8d3f-20ad-475f-8903-6ca65e14c8b5.webp 2x',
        min1360: 'https://acdn.tinkoff.ru/static/pages/files/d3060fc0-1af2-4de3-9357-1520796e1c04.png 1x, https://acdn.tinkoff.ru/static/pages/files/f42fb339-b399-4a56-9e8c-487f6673ca41.png 2x',
        max1360webp: 'https://acdn.tinkoff.ru/static/pages/files/89c45761-9343-4843-a3b1-8fd9fe9e459f.webp 1x, https://acdn.tinkoff.ru/static/pages/files/28078b83-2cd0-4ce2-b2e6-c0f79db2a5e4.webp 2x',
        src: 'https://acdn.tinkoff.ru/static/pages/files/068d5bb8-192b-4dd9-9f4c-69fdee5df770.png',
        srcSet: 'https://acdn.tinkoff.ru/static/pages/files/b61b8a5f-f8e0-478d-ac7b-424b3fcf1df9.png 2x',
      },
      title: 'Кредитная карта ALL&nbsp;Airlines Black&nbsp;Edition',
      about: 'Привычный бизнес-класс. Бесплатные авиабилеты за&nbsp;покупки и&nbsp;расширенная страховка для&nbsp;путешествий',
      list: [
        {
          itemTitle: 'До 2 000 000 ₽',
          itemSubtitle: 'Кредитный лимит'
        },
        {
          itemTitle: 'До 10% кэшбек',
          itemSubtitle: 'За траты на путешествия'
        },
        {
          itemTitle: '1 990 ₽ в месяц',
          itemSubtitle: 'С возможностью не платить'
        },
      ],
      formButton: {
        href: '/cards/credit-cards/all-airlines/black-edition/#form',
        text: 'Оформить карту'
      },
      learnMoreButton: {
        href: '/cards/credit-cards/all-airlines/black-edition/',
        text: 'Подробнее о карте'
      },
    },
    mobile: {
      img: {
        webp: 'https://acdn.tinkoff.ru/static/pages/files/ba4b1ada-d8cb-4ec6-b7f5-f539e65d6a06.webp 1x, https://acdn.tinkoff.ru/static/pages/files/6229ac40-3671-4981-8020-4c16ad52d750.webp 2x',
        src: 'https://acdn.tinkoff.ru/static/pages/files/57aaebfd-9165-4f73-a2b9-9d06445b5a78.png',
        srcSet: 'https://acdn.tinkoff.ru/static/pages/files/a264396d-1087-417d-a3d5-89cadf9fe24c.png 2x',
        alt: 'Кредитная карта ALL Airlines Black Edition',
      },
      title: 'Кредитная карта ALL&nbsp;Airlines&nbsp;Black&nbsp;Edition',
      about: 'Привычный бизнес-класс. Бесплатные авиабилеты за&nbsp;покупки и&nbsp;расширенная страховка для&nbsp;путешествий',
      list: [
        '<strong>До&nbsp;2&nbsp;000&nbsp;000&nbsp;₽</strong>&nbsp;&mdash; кредитный лимит',
        '<strong>До 10%&nbsp;кэшбека</strong> за траты на путешествия',
        '<strong>От 0&nbsp;₽ в&nbsp;месяц</strong> за&nbsp;обслуживание',
      ],
      formButton: {
        href: '/cards/credit-cards/all-airlines/black-edition/#form',
        text: 'Оформить карту'
      },
      learnMoreButton: {
        href: '/cards/credit-cards/all-airlines/black-edition/',
        text: 'Подробнее'
      },
    }
  },
  {
    isMain: false,
    cardTitle: 'Для автомобилистов',
    cardLink: '/cards/credit-cards/drive/#form',
    desktop: {
      img: {
        alt: 'Кредитная карта Tinkoff Drive',
        min1360webp: 'https://acdn.tinkoff.ru/static/pages/files/57af6784-9b4c-4404-93f2-5d0d40e84833.webp 1x, https://acdn.tinkoff.ru/static/pages/files/8bc35ec3-424b-461e-a168-1479ed4d752a.webp 2x',
        min1360: 'https://acdn.tinkoff.ru/static/pages/files/ad462187-8734-4b6b-abcf-41d5cccc50db.png 1x, https://acdn.tinkoff.ru/static/pages/files/777e9635-9d93-4558-a75e-2c1c9c09e9c7.png 2x',
        max1360webp: 'https://acdn.tinkoff.ru/static/pages/files/5ce8b990-cfe9-420c-b562-af9d2d271b23.webp 1x, https://acdn.tinkoff.ru/static/pages/files/3e53818b-49f3-41ca-86d1-8183fbae0d7d.webp 2x',
        src: 'https://acdn.tinkoff.ru/static/pages/files/c821df34-864f-4d69-9a6f-22760312ea33.png',
        srcSet: 'https://acdn.tinkoff.ru/static/pages/files/325b8149-ab61-414e-937c-c1d0f7ee10d5.png 2x',
      },
      title: 'Кредитная карта Tinkoff&nbsp;Drive',
      about: 'Кредитная карта для всех, кто за&nbsp;рулем. Получайте баллы за&nbsp;любые покупки и&nbsp;оплачивайте ими автоуслуги',
      list: [
        {
          itemTitle: 'До 700 000 ₽',
          itemSubtitle: 'Кредитный лимит'
        },
        {
          itemTitle: 'До 10% кэшбек',
          itemSubtitle: 'За траты на автомобиль'
        },
        {
          itemTitle: '990 ₽ в год',
          itemSubtitle: 'Стоимость обслуживания'
        },
      ],
      formButton: {
        href: '/cards/credit-cards/drive/#form',
        text: 'Оформить карту'
      },
      learnMoreButton: {
        href: '/cards/credit-cards/drive/',
        text: 'Подробнее о карте'
      },
    },
    mobile: {
      img: {
        webp: 'https://acdn.tinkoff.ru/static/pages/files/fa15706c-0ec0-431e-a51a-d92c29e96495.webp 1x, https://acdn.tinkoff.ru/static/pages/files/f49e3fcc-c87e-45ad-b141-ba8667a39801.webp 2x',
        src: 'https://acdn.tinkoff.ru/static/pages/files/74c454c2-7096-4a29-89be-ebbc7ddd2596.png',
        srcSet: 'https://acdn.tinkoff.ru/static/pages/files/d639cb8a-a2f7-4b67-ab1d-0485c1754647.png 2x',
        alt: 'Кредитная карта Tinkoff Drive',
      },
      title: 'Кредитная карта Tinkoff&nbsp;Drive',
      about: 'Кредитная карта для&nbsp;всех, кто за&nbsp;рулем',
      list: [
        '<strong>До&nbsp;700&nbsp;000&nbsp;₽</strong>&nbsp;&mdash; кредитный лимит',
        '<strong>До 10%&nbsp;кэшбека</strong> за траты на авто',
        '<strong>990&nbsp;₽ в&nbsp;год</strong> за&nbsp;обслуживание',
      ],
      formButton: {
        href: '/cards/credit-cards/drive/#form',
        text: 'Оформить карту'
      },
      learnMoreButton: {
        href: '/cards/credit-cards/drive/',
        text: 'Подробнее'
      },
    }
  },
];